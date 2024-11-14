import React, { useReducer, useContext, useEffect } from "react";
import { GameContext, gameReducer } from "../game";
import Grid from "./Grid";
import NumberButtons from "./NumberButtons";
import ControlButtons from "./ControlButtons";
import Alert from "./Alert";
import { useSudokuContext } from "../context/SudokuContext";
import { generateSudokuPuzzle } from "../utils/sudokuGenerator";
import Difficulty from "./Difficulty";


const Board = () => {
    const context = useContext(GameContext);
    const [game, dispatch] = useReducer(gameReducer, context.game);

    const {difficulty ,setDifficulty} = useSudokuContext();
    const handleDifficultyChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        const selectedDifficulty = e.target.value;
        setDifficulty(selectedDifficulty);
        dispatch({type:"NEW_GAME",difficulty:selectedDifficulty});
    }

    useEffect(()=>{
        const newPuzzle = generateSudokuPuzzle(difficulty);
    })
    return (
        <GameContext.Provider value={{ game, dispatch }}>
            <div className="board">
                <div className="header">
                    <h1>SUDOKU</h1>
                    <Difficulty onChange={handleDifficultyChange} />
                </div>
                <Alert />
                <Grid />
                <NumberButtons />
                <ControlButtons />
            </div>
        </GameContext.Provider>
    );
};


export default Board;


