import { Gameboard } from "./Components/gameboard";
import "./style.css";

function renderBoards() {
  const div = document.querySelector("div");
  let playerBoard = new Gameboard();
  for (let elem of playerBoard.board) {
    let squareDiv = document.createElement("div");
    squareDiv.className = `${elem.slice(0, -1)} squareDiv`;
    div.append(squareDiv);
  }
}
renderBoards();
