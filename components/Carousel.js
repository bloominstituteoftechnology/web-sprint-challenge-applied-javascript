/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker() {

  //create object of all images
  const imageObject = {
    0: 'https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg',
    1: 'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg',
    2: 'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg',
    3: 'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg'
  };

  //instantiate an image index for the carousl
  let imageIndex = 0;

  //create carousel div
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  //create carousel image
  let carouselImage = document.createElement('img');
  carouselImage.setAttribute('src', imageObject[imageIndex]);
  carouselImage.style.display = 'initial'; // whyyyyyy was this set to none by default!!!
  carousel.append(carouselImage);

  //create left button div
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.addEventListener('click', decrement);
  carousel.append(leftButton);  

  //create right button div
  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.addEventListener('click', increment);
  carousel.append(rightButton);  
  
  //increment function
  function increment () {
    console.log('+');
    if (imageIndex === 3){
      imageIndex = 0;
    } else {
      imageIndex += 1;
    };
    carouselImage.setAttribute('src', imageObject[imageIndex]);
  };

  //decrement function  
  function decrement () {
    console.log('-');
    if (imageIndex === 0){
      imageIndex = 3;
    } else {
      imageIndex -= 1;
    };
    carouselImage.setAttribute('src', imageObject[imageIndex]);
  };
  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(carouselMaker());