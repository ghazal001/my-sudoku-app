import React, { useState, useContext } from "react";
import { GameContext } from "../game";
import { makeGrid } from "../functions/grid";
import Notes from "./Notes";
import CellInput from "./CellInput";

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const value = +e.currentTarget.value;
  const re = /^[0-9]$/;
  if (value > 0 || !re.test(e.key)) return e.preventDefault();
};

const Grid = ({puzzle}:{puzzle:(number | null)[][]}) => {
  const [hideNotesId, setHideNotesId] = useState<number | null>(null);
  const { game } = useContext(GameContext);
  const grid = makeGrid(game.sudoku);

  return (
    <div className="grid">
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((cell, j) => {
            const id = i * 9 + j;
            return (
              <div key={j} className="cell">
                <Notes
                  cell={cell}
                  cellId={id}
                  hideNotesId={hideNotesId}
                  onKeyPress={handleKeyPress}
                />

                {cell && (
                  <CellInput
                    cell={cell}
                    id={id}
                    setHideNotesId={setHideNotesId}
                    onKeyPress={handleKeyPress}
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
