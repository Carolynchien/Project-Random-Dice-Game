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
