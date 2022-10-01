const inputEl = document.getElementById('input')
const submitButton = document.getElementById('submitButton')
const wrapper = document.getElementById('wrapper')
const guessesEl = document.getElementById('guesses')

// generate random number between 1-100
let max = 100
let min = 1
let randomNumer = Math.floor(Math.random() * (max - min) + min )
var guesses = 5
var input

const changeInput = (e) => {
  e.preventDefault()
  input = e.target.value
  input = +input  
}

const checkNumber = (i, r) => {
  i < 1 ?  alert('Input field is empty!') : null
  console.log(i, r)
  if(!isNaN(i)){
    if(i === r) {
      congratsColor()
      alert('You got the right number! \n Congrats! \n \n Game will restart again soon :D!')
      setInterval(() => {
        location.reload()
      },2500)
      inputEl.value = ''
    } else if (i !== r && guesses != 1) {
      errorColor()
      guesses--
      i < r ? alert('Go Higher') : alert('Go Lower')
      alert(`Try again, you have ${guesses} tries left`)
      guessesEl.innerHTML = `You have ${guesses} left!`
      inputEl.value = ''
      i = 0
    } else {
      //restart game
      alert('Game over :( \n Play again!')
      guesses += 5
      inputEl.value = ''
    }
  } else {
    alert('You must input numbers only...')
    inputEl.value = ''
  }
}

const errorColor = () => {
  wrapper.style.backgroundColor = 'rgb(217, 54, 54)'
}

const congratsColor = () => {
  wrapper.style.backgroundColor = 'rgb(52, 189, 52)'
}




inputEl.addEventListener('input', (e) => changeInput(e))
submitButton.addEventListener('click', ()=> {checkNumber(input, randomNumer)})