import { Gameboard } from "../Components/gameboard";

export function gameLoop() {
  let playerBoard = new Gameboard();
  // let computerBoard = new Gameboard();
  setUpStartBoard();
  callShip(5);

  function setUpStartBoard() {
    //add handle computerdiv function toggle!
    const div = document.querySelector(".playergrid");
    for (let elem of playerBoard.board) {
      let squareDiv = document.createElement("div");
      squareDiv.className = `${elem.slice(0, -1)} squareDiv`;
      squareDiv.innerHTML = `${elem.slice(0, -1)}`;
      div.append(squareDiv);
    }
  }

  function callShip(length) {
    if (length === 0) return;
    let squareDiv = document.querySelectorAll(".squareDiv");
    toggleComputerBoard();

    function mouseEnter(event) {
      let fakeBoard = new Gameboard();
      let highLight = fakeBoard.place(length, event.target.innerHTML, "axisX");
      if (!highLight) {
        return;
      }

      highLight.forEach((light) => {
        let a = document.getElementsByClassName(light);
        a[0].classList.add("active");
      });
    }

    squareDiv.forEach((div) => {
      div.addEventListener("mouseenter", mouseEnter);

      div.onmouseout = function () {
        let allActive = document.querySelectorAll(".active");
        allActive.forEach((div) => div.classList.remove("active"));
      };

      div.addEventListener("click", (event) => {
        if (event.target.classList.contains("active")) {
          let a = playerBoard.place(length, event.target.classList[0], "axisX");

          a.forEach((shipPart) => {
            let allShipLocations = document.getElementsByClassName(shipPart);
            allShipLocations[0].classList.add("activeship");
          });
          console.log(playerBoard.board);
          // removeListener();
          length = length - 1;
        }
        if (length === 0) {
          removeListener();
          toggleComputerBoard();
        }
      });
    });
    function removeListener() {
      let squareDiv = document.querySelectorAll(".squareDiv");
      squareDiv.forEach((div) =>
        div.removeEventListener("mouseenter", mouseEnter)
      );
    }

    function toggleComputerBoard() {
      const computerDiv = document.querySelector(".computergrid");
      computerDiv.classList.toggle("hidden");
      console.log(computerDiv);
    }

    function computerBoard() {
      toggleComputerBoard();
    }
  }
}
