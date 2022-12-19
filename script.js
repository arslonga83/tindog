import Dog from './Dog.js'
import dogs from './data.js'

const dogsArray = dogs.map((dog) => {
  return new Dog(dog)
})

const likeBtn = document.querySelector('#like-btn')
const nopeBtn = document.querySelector('#nope-btn')

function render() {
  document.querySelector('main').innerHTML = dogsArray[0].getDogHtml()
}

function getNextDog() {
  dogsArray.push(dogsArray.shift()) //shuffle dog array for an endless loop
  render()
}

function getProfileHtml() {
  return `
        <img src="./images/cat-profile.jpg" alt="">
        <div class="img-text">
            <h1>AnonymousDogLover</h1>
            <p>I know how to make a dog purr.</p>
        </div>
  `
}

function toggleBtns() {
  likeBtn.disabled = !likeBtn.disabled
  nopeBtn.disabled = !nopeBtn.disabled
}

document.querySelector('#profile-btn').addEventListener('click', () => {
  document.querySelector('main').innerHTML = getProfileHtml()
  toggleBtns()
})

document.querySelector('#paw-btn').addEventListener('click', () => {
  likeBtn.disabled = false
  nopeBtn.disabled = false
  render()
})

likeBtn.addEventListener('click', () => {
  toggleBtns()
  dogsArray[0].likeDog()
  render()
  setTimeout(() => {
    getNextDog()
    toggleBtns()
  }, 1500)
})
 
nopeBtn.addEventListener('click', () => {
  toggleBtns()
  dogsArray[0].nopeDog()
  render()
  setTimeout(() => {
    getNextDog()
    toggleBtns()
  }, 1500)
})

render()