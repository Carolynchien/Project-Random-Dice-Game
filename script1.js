const subBtn = document.querySelector('.submit')
let nameInput = ''
const playerOneBtn = document.querySelector('.playerOne')
const playerTwoBtn = document.querySelector('.playerTwo')
const inputBoard = document.querySelector('.player1-form')
const enter = document.querySelector('.enter')

let player = '' // player one = 0, player 2 = 1

let playerOneName = ''

let playerTwoName = ''

playerOneBtn.addEventListener('click', () => {
  inputBoard.style.opacity = 1
  player = 0
})

playerTwoBtn.addEventListener('click', () => {
  inputBoard.style.opacity = 1
  player = 1
})

subBtn.addEventListener('click', () => {
  const nameInput = document.querySelector('.player1-input')

  if (nameInput.value != '') {
    console.log(nameInput.value)
    if (player === 0) {
      playerOneBtn.textContent = `${nameInput.value}`
      playerOneName = nameInput.value
      inputBoard.style.opacity = 0
      nameInput.value = ''
    } else if (player === 1) {
      playerTwoBtn.textContent = `${nameInput.value}`
      playerTwoName = nameInput.value
      inputBoard.style.opacity = 0
      nameInput.value = ''
    }
  }
})

enter.addEventListener('click', () => {
  document.location.href = 'index2.html'

  localStorage.setItem('playerOneName', playerOneBtn.textContent)
  localStorage.setItem('playerTwoName', playerTwoBtn.textContent)
})
