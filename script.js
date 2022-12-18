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

document.querySelector('#like-btn').addEventListener('click', () => {
    dogsArray[0].likeDog()
    render()
    setTimeout(() => getNextDog(), 1500)
  })
 

document.querySelector('#nope-btn').addEventListener('click', (e) => {
  dogsArray[0].nopeDog()
  render()
  setTimeout(() => getNextDog(), 1500)
})


render()