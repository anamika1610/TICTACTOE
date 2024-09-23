let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //Player O
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //player x
      box.innerText = "X";
      turnO = false;
    } else {
      //player o
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count == 9 && !isWinner) {
      gameDraw();
    }
  });
});

const checkWinner = () => {
  for (const pattern of winPatterns) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value == pos2Value && pos2Value == pos3Value) {
        console.log("winner is ", pos1Value);
        showWinner(pos1Value);
      }
    }
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  console.log("show winner function ");
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const gameDraw = () => {
  console.log("game is draw ");
  msg.innerText = `game is draw play again `;
  disableBoxes();
  msgContainer.classList.remove("hide");
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
