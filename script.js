import Dog from './Dog.js'
import dogs from './data.js'

const dogsArray = dogs.map((dog) => {
  return new Dog(dog)
})

let viewedDogs = []

function render() {
  document.querySelector('main').innerHTML = dogsArray[0].getDogHtml()
}

function getNextDog() {
  dogsArray.push(dogsArray.shift()) //shuffle dog array for an endless loop
  render()
}

document.querySelector('#like-btn').addEventListener('click', (e) => {
  // e.target.style.background = '#56E9CD'
    getNextDog()
  })
 

// document.querySelector('#nope-btn').addEventListener('click', (e) => {
//   e.target.style.background = '#E82D70'
//   profile.nopeDog
//   count++
//   if (count > dogs.length) {
//     count = 0
//   }
//   profile = getNewDog()
//   render()
// })


render()