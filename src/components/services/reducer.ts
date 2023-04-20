import { initState } from "../Calculator";
import { Actions } from "../utils/Actions";
import { isEmpty } from "../utils/isEmpty";

export type reducerProps = {
  type: string;
  action: Actions;
};

export default function reducer(
  state: typeof initState,
  { type, action }: reducerProps
) {
  function evalutate(op: string) {
    switch (op) {
      case "+":
        return parseFloat(state.prev || "0") + parseFloat(state.curr || "0");
      case "-":
        return parseFloat(state.prev || "0") - parseFloat(state.curr || "0");
      case "x":
        return parseFloat(state.prev || "0") * parseFloat(state.curr || "0");
      case "/":
        return parseFloat(state.prev || "0") / parseFloat(state.curr || "0");
      default:
        return state.curr;
    }
  }

  switch (action) {
    case Actions.ADD_DIGIT:
      if (type === "." && state.curr.includes(".")) return state;

      if (type === "0" && isEmpty(state.curr)) return state;

      if (type === "." && isEmpty(state.curr))
        return { ...state, curr: "0" + type };

      if (state.curr.length >= 10) return state;

      return { ...state, curr: state.curr + type };
    case Actions.DELETE_DIGIT:
      return { ...state, curr: state.curr.slice(0, -1) };
    case Actions.CLEAR:
      return { curr: "", prev: "", op: "" };
    case Actions.OPERATION:
      if (isEmpty(state.curr) && isEmpty(state.prev))
        return { ...state, prev: "0", curr: "" };

      if (isEmpty(state.prev)) {
        return {
          ...state,
          prev:
            state.curr.slice(-1) === "."
              ? state.curr.substring(0, state.curr.length - 1)
              : state.curr,
          curr: "",
          op: type,
        };
      }

      return {
        ...state,
        curr: "",
        prev: evalutate(state.op).toString(),
        op: type,
      };
    case Actions.RESULT:
      return { curr: evalutate(state.op).toString(), op: "", prev: "" };
    default:
      return state;
  }
}
