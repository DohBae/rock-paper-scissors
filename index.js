// Computer player that randomly chooses rock, paper, or scissors
function getComputerChoice() {
  const randomNumb = Math.floor(Math.random() * 3);

  if (randomNumb === 0) {
    console.log("Rock");
  } else if (randomNumb === 1) {
    console.log("Paper");
  } else {
    console.log("Scissors")
  }
}
console.log(getComputerChoice())
