export default class Dog {
  constructor(data) {
    Object.assign(this, data)
    this.hasBeenNoped = false;
  }

  

  getDogHtml() {
    const {name, avatar, age, bio, hasBeenLiked, hasBeenNoped} = this;
    
    return `
        <img src="${avatar}" alt="">
        <div class="img-text">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p>
        </div>
        <img class="like-badge" src="./images/badge-like.png" alt="" style="display: ${hasBeenLiked ? 'block' : ''}">
        <img class="nope-badge" src="./images/badge-nope.png" alt="" style="display: ${hasBeenNoped ? 'block' : ''}">
      `
  }

  likeDog() {
    this.hasBeenLiked = !this.hasBeenLiked;
  }

  nopeDog() {
    this.hasBeenNoped = !this.hasBeenNoped;
  }

 
  
}