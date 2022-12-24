import { Gameboard } from "../Components/gameboard";

export function gameLoop() {
  let playerBoard = new Gameboard();
  // let computerBoard = new Gameboard();
  placeTheShips();

  function placeTheShips() {
    const computerDiv = document.querySelector(".computergrid");
    computerDiv.style.display = "none";
    //add handle computerdiv function toggle!
    const div = document.querySelector(".playergrid");
    for (let elem of playerBoard.board) {
      let squareDiv = document.createElement("div");
      squareDiv.className = `${elem.slice(0, -1)} squareDiv`;
      squareDiv.innerHTML = `${elem.slice(0, -1)}`;

      squareDiv.addEventListener("mouseenter", () => {
        let fakeBoard = new Gameboard();

        let highLight = fakeBoard.place("4", squareDiv.innerHTML, "axisX");

        if (!highLight) {
          return;
        }

        highLight.forEach(function placeShip(light) {
          let a = document.getElementsByClassName(light);
          a[0].classList.add("active");
          console.log(a[0]);
        });
      });

      squareDiv.onmouseout = function () {
        let allActive = document.querySelectorAll(".active");
        allActive.forEach((div) => div.classList.remove("active"));
      };

      squareDiv.addEventListener("click", (event) => {
        if (event.target.classList.contains("active")) {
          let a = playerBoard.place(4, event.target.classList[0], "axisX");

          a.forEach(function placeShip(light) {
            let allShipLocations = document.getElementsByClassName(light);
            allShipLocations[0].classList.add("activeship");
          });

          console.log(playerBoard.board);
          console.log(event.target.classList[0], "Jackpot!");
        }
      });
      div.append(squareDiv);
    }
  }
}
