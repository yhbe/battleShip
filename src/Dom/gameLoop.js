import { Gameboard } from "../Components/gameboard";

export function gameLoop() {
  let playerBoard = new Gameboard();
  // let computerBoard = new Gameboard();
  renderPlayerBoard();

  function renderPlayerBoard() {
    const computerDiv = document.querySelector(".computergrid");
    computerDiv.style.display = "none";
    //add handle computerdiv function toggle!
    const div = document.querySelector(".playergrid");
    for (let elem of playerBoard.board) {
      let squareDiv = document.createElement("div");
      squareDiv.className = `${elem.slice(0, -1)} squareDiv`;
      squareDiv.innerHTML = `${elem.slice(0, -1)}`;
      squareDiv.addEventListener("click", () => {
        // console.log(playerBoard.board.get(squareDiv.innerHTML));
      });
      div.append(squareDiv);
    }
  }

  // function renderComputerBoard() {
  //   for (let elem of computerBoard.board) {
  //     let squareDiv = document.createElement("div");
  //     squareDiv.className = `${elem.slice(0, -1)} squareDiv`;
  //     squareDiv.innerHTML = `${elem.slice(0, -1)}`;
  //     div.append(squareDiv);
  //   }
  // }
}
