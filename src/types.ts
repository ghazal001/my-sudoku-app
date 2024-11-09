import { GameAction } from "./game";

export type Sudoku = Cell[];

export type Cell = {
  readOnly: boolean;
  value: number | null;
  notes: Notes;
};

export type Notes = (number | null)[][];

export type Alert = { type: string; message: string } | null;

export type OnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => void;

export type Button =
  | { type: "Erase" }
  | { type: "Number"; value: number }
  | { type: "Empty" };

export type setHideNotesId = React.Dispatch<
  React.SetStateAction<number | null>
>;

export type Dispatch = (action: GameAction) => void;
