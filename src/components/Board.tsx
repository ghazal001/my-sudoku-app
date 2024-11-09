import { useReducer, useContext } from "react";
import { GameContext, gameReducer } from "../game";

import Grid from "./Grid";
import NumberButtons from "./NumberButtons";
import ControlButtons from "./ControlButtons";
import Alert from "./Alert";

const Board = () => {
    const context = useContext(GameContext);
    const [game, dispatch] = useReducer(gameReducer, context.game);

    return (
        <GameContext.Provider value={{ game, dispatch }}>
            <div className="board">
                <h1>SUDOKU</h1>
                <Alert />
                <Grid />
                <NumberButtons />
                <ControlButtons />
            </div>
        </GameContext.Provider>
    );
};

export default Board;
