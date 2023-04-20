import { useReducer } from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import reducer from "./services/reducer";

export const initState = {
  curr: "",
  prev: "",
  op: "",
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="w-[30rem] bg-slate-600 p-2">
      <Display state={state} />
      <Keyboard dispatch={dispatch} />
    </div>
  );
};

export default Calculator;
