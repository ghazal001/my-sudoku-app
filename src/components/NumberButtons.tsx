import { useContext } from "react";
import { GameContext } from "../game";
import { Button, Dispatch } from "../types";

const handleNumClick = (value: number, button: Button, dispatch: Dispatch) => {
    dispatch({
        type: "SET_BUTTON",
        button:
            button.type !== "Number"
                ? { type: "Number", value: value }
                : button.value === value
                    ? { type: "Empty" }
                    : { type: "Number", value: value },
    });
};

const handleEraseClick = (button: Button, dispatch: Dispatch) => {
    dispatch({
        type: "SET_BUTTON",
        button: { type: button.type === "Erase" ? "Empty" : "Erase" },
    });
};

const NumberButtons = () => {
    const { game, dispatch } = useContext(GameContext);

    return (
        <div className="btn-group">
            {Array.from(Array(9).keys()).map((number) => (
                <button
                    key={number}
                    onClick={(e) =>
                        handleNumClick(+e.currentTarget.value, game.button, dispatch)
                    }
                    value={number + 1}
                    className={
                        game.button.type === "Number" && number + 1 === game.button.value
                            ? "btn-selected"
                            : ""
                    }
                >
                    {number + 1}
                </button>
            ))}
            <button
                onClick={() => handleEraseClick(game.button, dispatch)}
                className={game.button.type === "Erase" ? "btn-selected" : ""}
            >
                x
            </button>
        </div>
    );
};

export default NumberButtons;
