import Dog from './Dog.js'
import dogs from './data.js'

const profile = new Dog(dogs[0])

document.querySelector('main').innerHTML = profile.getDogHtml()
