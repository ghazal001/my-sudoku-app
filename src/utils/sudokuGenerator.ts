// sudokuGenerator.ts
import { makepuzzle , solvepuzzle } from "sudoku";
// Function to generate a Sudoku puzzle based on difficulty
export const generateSudokuPuzzle = (difficulty: string) => {
    let puzzle;

    switch (difficulty) {
        case 'Easy':
            puzzle = generateEasyPuzzle();
            break;
        case 'Medium':
            puzzle = generateMediumPuzzle();
            break;
        case 'Hard':
            puzzle = generateHardPuzzle();
            break;
        default:
            puzzle = generateEasyPuzzle();
    }

    return puzzle;
};

// Helper functions for generating different levels of puzzles
const generateEasyPuzzle = () => {
    // Implement easy puzzle generation (e.g., fewer empty cells)
    return createPuzzle(25); // Placeholder for puzzle with 25 empty cells (easy)
};

const generateMediumPuzzle = () => {
    // Implement medium puzzle generation (e.g., moderate number of empty cells)
    return createPuzzle(40); // Placeholder for puzzle with 40 empty cells (medium)
};

const generateHardPuzzle = () => {
    // Implement hard puzzle generation (e.g., more empty cells)
    return createPuzzle(55); // Placeholder for puzzle with 55 empty cells (hard)
};

// Core puzzle generator logic
const createPuzzle = (emptyCells: number) => {
    const fullGrid = makepuzzle(); // Generate a complete grid

    // Make a copy to modify for the puzzle
    const puzzle = fullGrid.map((cell: null) => cell !== null ? cell : null);

    // Randomly remove cells to create the puzzle
    for (let i = 0; i < emptyCells; i++) {
        const randomIndex = Math.floor(Math.random() * 81);
        puzzle[randomIndex] = null; // Remove cell
    }

    return puzzle;

};
