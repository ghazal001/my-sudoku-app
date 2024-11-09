import { useContext } from "react";
import { GameContext } from "../game";

const Alert = () => {
  const { game } = useContext(GameContext);
  return (
    <div className={`alert${game.alert ? " alert-" + game.alert.type : ""}`}>
      {game.alert && game.alert.message}
    </div>
  );
};

export default Alert;
