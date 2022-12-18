import Dog from './Dog.js'
import dogs from './data.js'

const dogsArray = dogs.map((dog) => {
  return new Dog(dog)
})

function render() {
  document.querySelector('main').innerHTML = dogsArray[0].getDogHtml()
}

function getNextDog() {
  dogsArray.push(dogsArray.shift()) //shuffle dog array for an endless loop
  render()
}

const likeBtn = document.querySelector('#like-btn')
const nopeBtn = document.querySelector('#nope-btn')

likeBtn.addEventListener('click', (e) => {
  likeBtn.disabled = true
  nopeBtn.disabled = true
  console.log(e.target)
  dogsArray[0].likeDog()
  render()
  setTimeout(() => {
    getNextDog()
    nopeBtn.disabled = false
    likeBtn.disabled = false
  }, 1500)
})
 

nopeBtn.addEventListener('click', (e) => {
  nopeBtn.disabled = true
  likeBtn.disabled = true
  dogsArray[0].nopeDog()
  render()
  setTimeout(() => {
    getNextDog()
    nopeBtn.disabled = false
    likeBtn.disabled = false
  }, 1500)
})

render()