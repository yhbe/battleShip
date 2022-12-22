import { Gameboard } from "../Components/gameboard";
export function renderComputerBoard() {
  const div = document.querySelector(".computergrid");
  let playerBoard = new Gameboard();
  for (let elem of playerBoard.board) {
    let squareDiv = document.createElement("div");
    squareDiv.className = `${elem.slice(0, -1)} squareDiv`;
    squareDiv.innerHTML = `${elem.slice(0, -1)}`;
    div.append(squareDiv);
  }
}
