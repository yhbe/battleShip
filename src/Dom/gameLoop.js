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
      let [first, second, third] = event.target.innerHTML;
      if (third === undefined) {
        third = 0;
      }
      let word = [];
      word.push(first, Number(second) + third);
      //
      let fakeBoard = new Gameboard();
      let highLight = fakeBoard.place(length, word, "axisX");
      if (!highLight) {
        return;
      }

      highLight.forEach((light) => {
        let a = document.getElementsByClassName(light);
        a[0].classList.add("active");
      });
    }

    function mouseOut() {
      // squareDiv.forEach((div) =?)
      let allActive = document.querySelectorAll(".active");
      allActive.forEach((div) => div.classList.remove("active"));
    }

    function onClick(event) {
      if (event.target.classList.contains("active")) {
        let [first, second, third] = event.target.classList[0];
        if (third === undefined) {
          third = 0;
        }
        let word = [];
        word.push(first, Number(second) + third);

        let a = playerBoard.place(length, word, "axisX");

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
    }

    squareDiv.forEach((div) => {
      div.addEventListener("mouseenter", mouseEnter);

      div.addEventListener("mouseout", mouseOut);

      div.addEventListener("click", onClick);
    });

    function removeListener() {
      let squareDiv = document.querySelectorAll(".squareDiv");

      squareDiv.forEach((div) =>
        div.removeEventListener("mouseenter", mouseEnter)
      );

      squareDiv.forEach((div) => div.removeEventListener("mouseout", mouseOut));

      squareDiv.forEach((div) => div.removeEventListener("click", onClick));
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
