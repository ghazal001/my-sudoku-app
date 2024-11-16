import React, { useReducer, useContext, useEffect, useState } from "react";
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
    
    
    //state to store the puzzle grid
    const [puzzle , setPuzzle] = useState<(number | null)[][]>([]);

    const handleDifficultyChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        const selectedDifficulty = e.target.value;
        console.log("selected difficulty",selectedDifficulty);
        setDifficulty(selectedDifficulty);
        dispatch({type:"NEW_GAME",difficulty:selectedDifficulty});
    }

    useEffect(()=>{
        console.log("generating puzzle for difficulty",difficulty);
        const newPuzzle = generateSudokuPuzzle(difficulty);
        setPuzzle(newPuzzle);
    },[difficulty]);
    return (
        <GameContext.Provider value={{ game, dispatch }}>
            <div className="board">
                <div className="header">
                    <h1>SUDOKU</h1>
                    <div className="difficulty">
                    <Difficulty onChange={handleDifficultyChange} />
                    </div>
                </div>
                <Alert />
                <Grid puzzle={puzzle} />
                <NumberButtons />
                <ControlButtons />
            </div>
        </GameContext.Provider>
    );
};


export default Board;


