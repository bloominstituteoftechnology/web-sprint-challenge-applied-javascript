/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carouselCreate(){
  counter = 0;

  imageArr = ["./assets/carousel/mountains.jpeg","./assets/carousel/computer.jpeg","./assets/carousel/trees.jpeg","./assets/carousel/turntable.jpeg"]

  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  const leftButton = document.createElement('div')
  leftButton.className = 'left-button'
  leftButton.textContent = "<"

  const rightButton = document.createElement('div')
  rightButton.className = 'right-button'
  rightButton.textContent = ">"

  carousel.appendChild(rightButton)
  carousel.appendChild(leftButton)
  
  const carCont = document.querySelector('.carousel-container')
  carCont.appendChild(carousel)

  const image = document.createElement('IMG');
  image.src = imageArr[0];

  carousel.appendChild(image);

  leftButton.addEventListener('click', () =>{
    if(counter > 0){
    counter--;
    image.src = imageArr[counter];
    }
  })
  rightButton.addEventListener('click', () =>{
    if(counter < 3){
      counter++;
      image.src = imageArr[counter];
  }
})
}

carouselCreate();
