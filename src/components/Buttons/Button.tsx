import React from "react";
import { reducerProps } from "../services/reducer";
import { Actions } from "../utils/Actions";

type ButtonProps = {
  dispatch: React.Dispatch<reducerProps>;
  digit: string;
  color?: "digit" | "operation";
  size?: "default" | "large";
};

const Button = ({
  digit,
  dispatch,
  size = "default",
  color = "digit",
}: ButtonProps) => {
  const getCustomClassName = ({ size, color }: Partial<ButtonProps>) => {
    let className = "";
    size === "large"
      ? (className += "basis-[calc(50%_+_0.5rem)] ")
      : (className += "basis-1/4 ");

    color === "digit"
      ? (className += " bg-zinc-400 hover:bg-zinc-300")
      : (className += " bg-gray-900 hover:bg-gray-800 text-white");

    return className;
  };
  const getAction = () => {
    switch (digit) {
      case "+":
      case "-":
      case "x":
      case "/":
        return Actions.OPERATION;
      case "del":
        return Actions.DELETE_DIGIT;
      case "c":
        return Actions.CLEAR;
      case "=":
        return Actions.RESULT;
      default:
        return Actions.ADD_DIGIT;
    }
  };

  return (
    <button
      onClick={() => dispatch({ type: digit, action: getAction() })}
      className={`${getCustomClassName({
        size,
        color,
      })} grid h-24 cursor-pointer place-content-center text-3xl font-medium`}
    >
      {digit}
    </button>
  );
};

export default Button;
