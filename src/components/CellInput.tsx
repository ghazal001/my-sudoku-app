import { useContext } from "react";
import { Game, GameContext } from "../game";
import { CellInputProps } from "../interfaces";
import { Sudoku, setHideNotesId, Dispatch } from "../types";

const updateCell = (sudoku: Sudoku, id: number, newValue: number | null) =>
  sudoku.map((cell, i) => (i === id ? { ...cell, value: newValue } : cell));

const onChange =
  (sudoku: Sudoku, dispatch: Dispatch) =>
  (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "SET_SUDOKU",
      sudoku: updateCell(sudoku, +e.target.id, +e.target.value),
    });

const onClick = (
  id: number,
  { button, sudoku }: Game,
  dispatch: Dispatch,
  setHideNotesId: setHideNotesId
) => {
  const cell = sudoku[id];
  const newValue = cell.readOnly
    ? cell.value
    : button.type === "Number"
    ? button.value
    : button.type === "Erase"
    ? null
    : cell.value;
  dispatch({
    type: "SET_SUDOKU",
    sudoku: updateCell(sudoku, id, newValue),
  });
  setHideNotesId(id);
};

const CellInput = ({
  cell,
  id,
  setHideNotesId,
  onKeyPress,
}: CellInputProps) => {
  const { game, dispatch } = useContext(GameContext);

  return (
    <input
      id={id.toString()}
      type="number"
      min={1}
      max={9}
      readOnly={cell.readOnly}
      value={cell.value ? cell.value : ""}
      onChange={onChange(game.sudoku, dispatch)}
      onClick={() => onClick(id, game, dispatch, setHideNotesId)}
      onBlur={() => setHideNotesId(null)}
      onKeyPress={onKeyPress}
      className={`cell-input 
        ${cell.readOnly ? "readonly" : ""} 
        ${!cell.value ? "empty" : ""}
      `}
    />
  );
};

export default CellInput;
