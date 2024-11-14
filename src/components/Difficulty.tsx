// import React, { useContext } from 'react';
import { useSudokuContext } from '../context/SudokuContext';
import React from 'react';

type DifficultyProps = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
};
const Difficulty = (props: DifficultyProps) => {
    const { difficulty} = useSudokuContext();


    return (
        <div>
            <label htmlFor="difficulty" >Difficulty: </label>
            <select id="difficulty" defaultValue={difficulty}
                onChange={props.onChange}
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
};

export default Difficulty;

    // const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setDifficulty(event.target.value);
    // };
