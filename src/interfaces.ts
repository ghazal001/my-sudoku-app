import {
    Cell,
    OnKeyPress,
    setHideNotesId,
  } from "./types";
  
  export interface NotesProps {
    cell: Cell;
    cellId: number;
    hideNotesId: number | null;
    onKeyPress: OnKeyPress;
  }
  
  export interface CellInputProps {
    cell: Cell;
    id: number;
    setHideNotesId: setHideNotesId;
    onKeyPress: OnKeyPress;
  }
  