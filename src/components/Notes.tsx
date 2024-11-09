import React, { useContext } from "react";
import { Game, GameContext } from "../game";
import { NotesProps } from "../interfaces";
import { Sudoku, Dispatch } from "../types";

const updateNote = (
  sudoku: Sudoku,
  cellId: number,
  noteId: number,
  newValue: number | null
) =>
  sudoku.map((cell, i) => {
    if (i === cellId)
      return {
        ...cell,
        notes: cell.notes.map((row, i) =>
          row.map((note, j) => (i * 3 + j === noteId ? newValue : note))
        ),
      };
    return cell;
  });

const onChange =
  (cellId: number, sudoku: Sudoku, dispatch: Dispatch) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? null : +e.target.value;
    dispatch({
      type: "SET_SUDOKU",
      sudoku: updateNote(sudoku, cellId, +e.target.id, value),
    });
  };

const onClick = (
  cellId: number,
  noteId: number,
  { button, sudoku }: Game,
  dispatch: Dispatch
) => {
  const oldValue = sudoku[cellId].notes.flat()[noteId];
  const newValue =
    button.type === "Number"
      ? button.value
      : button.type === "Erase"
      ? null
      : oldValue;
  dispatch({
    type: "SET_SUDOKU",
    sudoku: updateNote(sudoku, cellId, noteId, newValue),
  });
};

const Notes = ({ cell, cellId, hideNotesId, onKeyPress }: NotesProps) => {
  const { game, dispatch } = useContext(GameContext);

  return (
    <div className="note-group">
      {cell &&
        !cell.readOnly &&
        !cell.value &&
        !(hideNotesId === cellId) &&
        cell.notes.map((row, i) => (
          <div key={i} className={`note-row${i > 0 ? " note-row-lower" : ""}`}>
            {row.map((note, j) => {
              const noteId = i * 3 + j;
              return (
                <input
                  key={noteId}
                  id={noteId.toString()}
                  type="number"
                  min={1}
                  max={9}
                  onKeyPress={onKeyPress}
                  readOnly={false}
                  value={note ? note : ""}
                  onClick={() => onClick(cellId, noteId, game, dispatch)}
                  onChange={onChange(cellId, game.sudoku, dispatch)}
                  className="note"
                />
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default Notes;
