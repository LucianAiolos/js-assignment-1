const inputEl = document.getElementById('input')
const submitButton = document.getElementById('submitButton')


// generate random number between 1-100
let max = 100
let min = 1
let randomNumer = Math.floor(Math.random() * (max - min) + min )
let guesses = 5
var input

const changeInput = (e) => {
  e.preventDefault()
  input = e.target.value
  input = +input  
}

const checkNumber = (i, r) => {
  i < 1 ?  alert('Input field is empty!') : null
  console.log(i)
  if(!isNaN(i)){
    if(i === r) {
      alert('You got the right number! \n Congrats!')
      inputEl.value = ''
    } else if (i !== r && guesses != 1) {
      guesses--
      i < r ? alert('Go Higher') : alert('Go Lower')
      alert(`Try again, you have ${guesses} tries left`)
      inputEl.value = ''
      i = 0
      console.log(i)
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


inputEl.addEventListener('input', (e) => changeInput(e))
submitButton.addEventListener('click', ()=> {checkNumber(input, randomNumer)})