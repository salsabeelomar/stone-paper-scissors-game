const scores = document.getElementById("scores");
const you = document.getElementsByClassName("you")[0];
const computer = document.getElementsByClassName("computer")[0];
const userRock = document.getElementById("rook");
const userPaper = document.getElementById("paper");
const userScissors = document.getElementById("scissors");
const start = document.getElementById("play");
const goodLuck = document.getElementById("goodLuck");
const comScore = document.getElementById("computerScore");
const youScore = document.getElementById("youScore");
const  reset =document.getElementById("reset")
const imagesObj = {
  rock: `<img class="corock"src="assert/rock.jpg" width="50" height="50" />`,
  paper: `  <img class="copaper" src="assert/paper.jpg" width="50" height="50" />`,
  scissor: ` <img class="coscissor" src="assert/scissors.jpg" width="50" height="50" />`,
};
const winers = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};
let ys = 0;
let cs = 0;

/// HTML Creation tags
let Computerchoose = document.createElement("p");
computer.appendChild(Computerchoose);

let userChooser = document.createElement("p");
you.appendChild(userChooser);

let cspan = document.createElement("span");
cspan.innerHTML = cs;
comScore.appendChild(cspan);

let yspan = document.createElement("span");
yspan.innerHTML = ys;
youScore.appendChild(yspan);

//// methods call

start.addEventListener("click",()=>{
  goodLuck.textContent = "Ready !! ";
userPaper.addEventListener("click", () => {
  Computerchoose.textContent = "";
  userChooser.innerHTML = imagesObj.paper;
  play("paper", AddComputerChoosen());
});
userRock.addEventListener("click", () => {
  Computerchoose.textContent = "";
  userChooser.innerHTML = imagesObj.rock;
  play("rock", AddComputerChoosen());
});
userScissors.addEventListener("click", () => {
  Computerchoose.textContent = "";
  userChooser.innerHTML = imagesObj.scissor;
 play("scissor", AddComputerChoosen())
});
})
reset.addEventListener("click",()=>{
  goodLuck.textContent="Try You luck !"
  Computerchoose.textContent = "";
  userChooser.textContent =""
  ys = 0;
  cs = 0;
  cspan.innerHTML = cs;
  yspan.innerHTML = ys;

})
//// functions area

function AddComputerChoosen() {
  // Random
  Computerchoose.textContent = "";
  let action = Math.floor(
    Math.random() * (Object.keys(imagesObj).length - 1 + 1)
  );
  Computerchoose.innerHTML = Object.values(imagesObj)[action];
  return Object.keys(imagesObj)[action];
}


function play(you, com) {

  if (com == you) {
    goodLuck.textContent = "Try again !! ";
  } else if (winers[com] == you) {
    cs++;
    cspan.innerHTML = cs;
    goodLuck.textContent = "Computer is win";
  } else {
    ys++;
    yspan.innerHTML = ys;
    goodLuck.textContent = "You is win";
  }
}
