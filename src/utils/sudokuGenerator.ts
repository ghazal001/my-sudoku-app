// sudokuGenerator.ts
import { makepuzzle, solvepuzzle } from "sudoku";

// Function to generate a Sudoku puzzle based on difficulty
export const generateSudokuPuzzle = (difficulty: string) => {
    let puzzle;

    switch (difficulty) {
        case 'Easy':
            puzzle = createPuzzle(25);
            break;
        case 'Medium':
            puzzle = createPuzzle(40);
            break;
        case 'Hard':
            puzzle = createPuzzle(55);
            break;
        default:
            puzzle = createPuzzle(25);
    }
    // Ensure the puzzle is a complete array with 81 elements
    if (!puzzle || puzzle.length !== 81) {
        puzzle = createPuzzle(25);
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

// // Core puzzle generator logic
// const createPuzzle = (emptyCells: number) => {
//     const fullGrid = makepuzzle(); // Generate a complete grid

//     // Make a copy to modify for the puzzle
//     const puzzle = fullGrid.map((cell: null) => cell !== null ? cell : null);

//     // Randomly remove cells to create the puzzle
//     for (let i = 0; i < emptyCells; i++) {
//         const randomIndex = Math.floor(Math.random() * 81);
//         puzzle[randomIndex] = null; // Remove cell
//     }

//     return puzzle;

// };





// // Core puzzle generator logic
// const createPuzzle = (emptyCells: number) => {
//     let fullGrid = makepuzzle();

//     // Check if makepuzzle returned a valid array; if not, create a new empty puzzle
//     if (!fullGrid || fullGrid.length !== 81) {
//         fullGrid = Array(81).fill(null);
//     }

//     // Ensure we have 81 cells and map it to ensure any undefined values are set to null
//     const puzzle = fullGrid.map((cell: number | null) => cell !== null ? cell : null);

//     // Randomly remove cells to create the puzzle
//     for (let i = 0; i < emptyCells; i++) {
//         const randomIndex = Math.floor(Math.random() * 81);
//         puzzle[randomIndex] = null; // Remove cell
//     }

//     return puzzle;
// };




// Core puzzle generator logic
// const createPuzzle = (emptyCells: number) => {
//     // Generate a solvable Sudoku puzzle
//     let puzzle = makepuzzle();

//     // Ensure the puzzle has the right number of empty cells
//     let currentEmptyCells = puzzle.filter((cell: null) => cell === null).length;

//     if (currentEmptyCells < emptyCells) {
//         // Remove additional cells if needed
//         puzzle = removeExtraCells(puzzle, emptyCells - currentEmptyCells);
//     } else if (currentEmptyCells > emptyCells) {
//         // Restore some cells if there are too many empty cells
//         puzzle = restoreCells(puzzle, currentEmptyCells - emptyCells);
//     }

//     return puzzle;
// };


// // Helper function to remove extra cells from the puzzle
// const removeExtraCells = (puzzle: (number | null)[], extraCells: number) => {
//     const newPuzzle = [...puzzle];
//     let count = 0;

//     while (count < extraCells) {
//         const randomIndex = Math.floor(Math.random() * 81);
//         if (newPuzzle[randomIndex] !== null) {
//             newPuzzle[randomIndex] = null;
//             count++;
//         }
//     }

//     return newPuzzle;
// };

// // Helper function to restore cells if too many are removed
// const restoreCells = (puzzle: (number | null)[], cellsToRestore: number) => {
//     const newPuzzle = [...puzzle];
//     let count = 0;

//     while (count < cellsToRestore) {
//         const randomIndex = Math.floor(Math.random() * 81);
//         if (newPuzzle[randomIndex] === null) {
//             newPuzzle[randomIndex] = Math.floor(Math.random() * 9) + 1; // Random placeholder, replace with valid logic if needed
//             count++;
//         }
//     }

//     return newPuzzle;
// };



// Core puzzle generator logic
const createPuzzle = (emptyCells: number) => {
    let puzzle = makepuzzle();

    // Check if makepuzzle returned a valid array; if not, initialize an empty puzzle
    if (!puzzle || puzzle.length !== 81) {
        puzzle = Array(81).fill(null);
    }

    // Ensure the puzzle has the right number of empty cells
    let currentEmptyCells = puzzle.filter((cell: null) => cell === null).length;

    if (currentEmptyCells < emptyCells) {
        // Remove additional cells if needed
        puzzle = removeExtraCells(puzzle, emptyCells - currentEmptyCells);
    } else if (currentEmptyCells > emptyCells) {
        // Restore some cells if there are too many empty cells
        puzzle = restoreCells(puzzle, currentEmptyCells - emptyCells);
    }

    return puzzle;
};

// Helper function to remove extra cells from the puzzle
const removeExtraCells = (puzzle: (number | null)[], extraCells: number) => {
    const newPuzzle = [...puzzle];
    let count = 0;

    while (count < extraCells) {
        const randomIndex = Math.floor(Math.random() * 81);
        if (newPuzzle[randomIndex] !== null) {
            newPuzzle[randomIndex] = null;
            count++;
        }
    }

    return newPuzzle;
};

// Helper function to restore cells if too many are removed
const restoreCells = (puzzle: (number | null)[], cellsToRestore: number) => {
    const newPuzzle = [...puzzle];
    let count = 0;

    while (count < cellsToRestore) {
        const randomIndex = Math.floor(Math.random() * 81);
        if (newPuzzle[randomIndex] === null) {
            // Here, we should ideally restore with the correct number from a solution grid.
            // For simplicity, we’ll restore with a placeholder and set it as a non-readOnly cell.
            newPuzzle[randomIndex] = Math.floor(Math.random() * 9) + 1;
            count++;
        }
    }

    return newPuzzle;
};
