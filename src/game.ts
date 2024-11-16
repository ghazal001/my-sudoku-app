import { makepuzzle, solvepuzzle } from "sudoku";
import { Sudoku, Dispatch, Button, Alert } from "./types";
import { rawToSudoku, makeSolution } from "./functions/board";
import { createContext } from "react";
import { generateSudokuPuzzle } from "./utils/sudokuGenerator";

export type Game = {
  puzzle: unknown;
  sudoku: Sudoku;
  solution: Sudoku;
  disabled: string[];
  button: Button;
  alert: Alert;
};

export type GameAction =
  | { type: "SET_SUDOKU"; sudoku: Sudoku }
  | { type: "SET_DISABLED"; disabled: string[] }
  | { type: "SET_BUTTON"; button: Button }
  | { type: "SET_ALERT"; alert: Alert }
  | { type: "NEW_GAME" ; difficulty:string};

const newGame = (difficulty : string): Game => {
  const puzzle = generateSudokuPuzzle(difficulty);
  const sudoku = rawToSudoku(puzzle);
  const solved = rawToSudoku(solvepuzzle(puzzle));
  const solution = makeSolution(sudoku, solved);
  return {
    puzzle,
    sudoku,
    solution,
    disabled: [],
    button: { type: "Empty" },
    alert: null,
  };
};

export const gameReducer = (game: Game, action: GameAction): Game => {
  switch (action.type) {
    case "SET_SUDOKU":
      return { ...game, sudoku: action.sudoku, alert: null };
    case "SET_DISABLED":
      return { ...game, disabled: action.disabled };
    case "SET_BUTTON":
      return { ...game, button: action.button };
    case "SET_ALERT":
      return { ...game, alert: action.alert };
    case "NEW_GAME":
      return newGame(action.difficulty);
  }
};

export const GameContext = createContext<{
  game: Game;
  dispatch: Dispatch;
}>({
  game: newGame("Easy "),
  dispatch: () => undefined,
});
