import React from "react";

type ButtonRowProps = {
  children: React.ReactNode;
};

const ButtonRow = ({ children }: ButtonRowProps) => {
  return <div className="flex justify-between gap-2">{children}</div>;
};

export default ButtonRow;
