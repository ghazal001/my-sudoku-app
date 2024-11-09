import { Sudoku } from "../types";

export const makeGrid = (data: Sudoku) =>
  Array.from({ length: 9 }, (_, i) => data.slice(i * 9, i * 9 + 9))
