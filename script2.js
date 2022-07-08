const playerOneName1 = localStorage.getItem('playerOneName')
const playerOneName2 = localStorage.getItem('playerTwoName')

//getting name values from front page

const section = document.querySelector('section')
const diceBtn = document.querySelector('#roll--dice')
const diceDisplay = document.querySelector('.dice')
const player1winner = document.querySelector('.player1-winner')
const player2winner = document.querySelector('.player2-winner')
const player1Display = document.querySelector('.player1-display')
const player2Display = document.querySelector('.player2-display')
const question = document.querySelector('.question')
const answerList = document.querySelector('.questions')
const options = document.querySelector('ul')
const questionBoard = document.querySelector('.question-board')
const restBtn = document.querySelector('.reset')
const homeBtn = document.querySelector('.btnHome')
const dot1 = document.createElement('div')
dot1.classList.add('dot', 'dot-playerOne')
const dot2 = document.createElement('div')
dot2.classList.add('dot', 'dot-playerTwo')
const p = document.createElement('p')
p.classList.add('p')

let curplayerLoc = ''
const divElement = document.getElementById(curplayerLoc)

const playerCurrent = [0, 0] //using array to store players locations [player1, player2]
let player = 0 // player 0 is the initiate player, 1 is the second player

//setting up: using JS to creating borad.
const createDiv = (num) => {
  let nineS = 8
  let tenS = 30
  let sixyS = 24
  for (let i = 0; i < num; i++) {
    const divElement = document.createElement('div')
    divElement.classList.add('block')

    if (i >= 0 && i <= 8) {
      if (i === 0) {
        divElement.id = `${i}`
        divElement.textContent = `Go`
        const goLabel = document.createElement('h5')
        goLabel.textContent = 'Go'
        divElement.style.backgroundColor = 'peru'
        // divElement.append(goLabel)
      } else {
        divElement.id = `${i}`
        divElement.textContent = `${i}`
        divElement.style.backgroundColor = 'green'
      }
    } else if (i % 10 === 9) {
      divElement.id = `${++nineS}`
      divElement.textContent = `${nineS}`
      divElement.style.backgroundColor = 'green'
    } else if (i % 10 === 0) {
      divElement.id = `${--tenS}`
      divElement.textContent = `${tenS}`
      divElement.style.backgroundColor = 'green'
    } else if (i >= 61 && i <= 68) {
      divElement.id = `${--sixyS}`
      divElement.textContent = `${sixyS}`
      divElement.style.backgroundColor = 'green'
    }

    section.append(divElement)
  }
}

createDiv(70)
//settig up: changing player1 and player2's name

player1Display.textContent = `${playerOneName1}`
player1Display.style.color = 'blue'
player2Display.textContent = `${playerOneName2}`
player2Display.style.color = 'palevioletred'

const settingUp = () => {
  const divElement = document.getElementById(0)
  divElement.append(dot1)
  divElement.append(dot2)
}

settingUp()

//Gnerating ramdon dice number
diceBtn.addEventListener('click', () => {
  diceBtn.disabled = true
  const randomDice = Math.floor(Math.random() * 6 + 1)
  diceDisplay.classList.remove('hidden')
  diceDisplay.src = `dice/dice-${randomDice}.png`
  let count = 0
  console.log(randomDice)
  int = setInterval(`loopOverboxs(${randomDice})`, 600) //passing loopOverboxs funtion to loop over
})

let count = 0 //
const loopOverboxs = (randomDice) => {
  appendDots()

  if (count === randomDice) {
    clearInterval(int)
    count = 0 //clearing count
    //checking if the pkayer stop at the specific box which will generate question
    if (
      playerCurrent[player] === 2 ||
      playerCurrent[player] % 5 === 0 ||
      playerCurrent[player] % 7 === 0
    ) {
      console.log(`before going to pool player ${player}`)
      questionPool()
      diceBtn.disabled = false
    } else {
      diceBtn.disabled = false
      console.log(`didn't get the question ${player}`)
      player = player === 0 ? 1 : 0
    }
  }

  playerCurrent[player]++ //increaing current player location

  //if the player get to 30 display winner
  if (playerCurrent[player] == 30) {
    const divElement = document.getElementById(0)
    divElement.append(player === 0 ? dot1 : dot2)
    diceDisplay.style.opacity = 0
    clearInterval(int)
    if (player === 0) {
      player1winner.style.opacity = 1
      player2Display.style.opacity = 0
      diceBtn.disabled = true
    } else {
      player2winner.style.opacity = 1
      player1Display.style.opacity = 0
      diceBtn.disabled = true
    }
  }

  count++
}
