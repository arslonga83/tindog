export default class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const {name, avatar, age, bio} = this;
    return `
        <img src="${avatar}" alt="">
        <div class="img-text">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div>
      `
  }

  likeDog() {
    this.hasBeenLiked = true;
    console.log('liked')
  }

  nopeDog() {
   
    console.log('noped')
  }
  
}