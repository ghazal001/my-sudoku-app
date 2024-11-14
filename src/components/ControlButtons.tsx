import { useContext } from "react";
import { Game, GameContext } from "../game";
import { Sudoku, Dispatch } from "../types";
import { initialNotes } from "../constants/constants";
import { isCorrect } from "../functions/board";
import { useSudokuContext } from "../context/SudokuContext";

const isDisabled = (button: string, disabled: string[]) =>
  disabled.filter((item) => item === button).length > 0 ? true : false;

const handleCheck = (game: Game, dispatch: Dispatch) =>
  dispatch({
    type: "SET_ALERT",
    alert: isCorrect(game.sudoku, game.solution)
      ? { type: "success", message: "Correct!" }
      : { type: "warning", message: "Wrong answer. Try again!" },
  });


const handleClear = (sudoku: Sudoku, dispatch: Dispatch) =>
  dispatch({
    type: "SET_SUDOKU",
    sudoku: sudoku.map((item) => ({
      ...item,
      value: item.readOnly ? item.value : null,
      notes: initialNotes,
    })),
  });

const handleShowResult = (solution: Sudoku, dispatch: Dispatch) => {
  dispatch({ type: "SET_SUDOKU", sudoku: solution });
  dispatch({ type: "SET_DISABLED", disabled: ["check", "clear"] });
};

const handleNewGame = (dispatch: Dispatch, difficulty:string) => {
  dispatch({ type: "NEW_GAME", difficulty });
};


const ControlButtons = () => {
  const { game, dispatch } = useContext(GameContext);
  const {difficulty} = useSudokuContext();

  return (
    <div className="btn-group">
      <button
        disabled={isDisabled("check", game.disabled)}
        onClick={() => handleCheck(game, dispatch)}
      >
        Check
      </button>
      <button
        disabled={isDisabled("clear", game.disabled)}
        onClick={() => handleClear(game.sudoku, dispatch)}
      >
        Clear
      </button>
      <button
        disabled={isDisabled("showResult", game.disabled)}
        onClick={() => handleShowResult(game.solution, dispatch)}
      >
        Show Result
      </button>
      <button
        disabled={isDisabled("newGame", game.disabled)}
        onClick={() => handleNewGame(dispatch,difficulty)}
      >
        New Game
      </button>
    </div>
  );
};

export default ControlButtons;
