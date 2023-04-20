import Button from "./Buttons/Button";
import ButtonRow from "./Buttons/ButtonRow";
import { reducerProps } from "./services/reducer";

type KeyboardProps = {
  dispatch: React.Dispatch<reducerProps>;
};

const Keyboard = ({ dispatch }: KeyboardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <ButtonRow>
        <Button digit="c" size="large" color="operation" dispatch={dispatch} />
        <Button digit="del" color="operation" dispatch={dispatch} />
        <Button digit="/" color="operation" dispatch={dispatch} />
      </ButtonRow>
      <ButtonRow>
        <Button digit="7" dispatch={dispatch} />
        <Button digit="8" dispatch={dispatch} />
        <Button digit="9" dispatch={dispatch} />
        <Button digit="x" color="operation" dispatch={dispatch} />
      </ButtonRow>
      <ButtonRow>
        <Button digit="4" dispatch={dispatch} />
        <Button digit="5" dispatch={dispatch} />
        <Button digit="6" dispatch={dispatch} />
        <Button digit="-" color="operation" dispatch={dispatch} />
      </ButtonRow>
      <ButtonRow>
        <Button digit="1" dispatch={dispatch} />
        <Button digit="2" dispatch={dispatch} />
        <Button digit="3" dispatch={dispatch} />
        <Button digit="+" color="operation" dispatch={dispatch} />
      </ButtonRow>
      <ButtonRow>
        <Button digit="0" dispatch={dispatch} />
        <Button digit="." dispatch={dispatch} />
        <Button digit="=" size="large" color="operation" dispatch={dispatch} />
      </ButtonRow>
    </div>
  );
};

export default Keyboard;
