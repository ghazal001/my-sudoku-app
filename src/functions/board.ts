import { Sudoku } from "../types";
import { initialNotes } from "../constants/constants"

//convert numbers 0-8 in raw data to numbers 1-9
// export const rawToSudoku = (data: (number | null)[]) => 
//   data.map((item: number | null) => ({
//     value: item !== null ? item + 1 : null,
//     readOnly: item !== null,
//     notes: initialNotes,
//   }));

export const rawToSudoku = (data: (number | null)[] | null) => 
  (data ?? []).map((item: number | null) => ({
    value: item !== null ? item + 1 : null,
    readOnly: item !== null,
    notes: initialNotes,
  }));

export const makeSolution = (sudoku: Sudoku, solved: Sudoku) => 
  solved.map((item, i) => ({
    ...item,
    readOnly: sudoku[i].readOnly,
  }));

export const isCorrect = (sudoku: Sudoku, solution: Sudoku) =>
  sudoku.every((item, i) => item.value === solution[i].value)
