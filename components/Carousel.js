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

// console.log(imgDictionary);

// import axios from "axios";

function constructor() {
  const imageObj = {
    0: "./assets/carousel/mountains.jpeg",
    1: "./assets/carousel/computer.jpeg",
    2: "./assets/carousel/trees.jpeg",
    3: "./assets/carousel/turntable.jpeg",
  };

  let imageIndex = 0;
  //objects
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  const caroImg = document.createElement("img");

  //classes
  carousel.classList.add("carousel");
  // leftButton.textContent = "left";
  // rightButton.textContent = "right";

  caroImg.src = imageObj[imageIndex];
  function increment() {
    console.log("+");
    if (imageIndex === 3) {
      imageIndex = 0;
    } else {
      imageIndex = imageIndex + 1;
    }
    caroImg.src = imageObj[imageIndex];
  }

  function decrement() {
    console.log("-");
    if (imageIndex === 0) {
      imageIndex = 3;
    } else {
      imageIndex = imageIndex - 1;
    }
    caroImg.src = imageObj[imageIndex];
  }

  leftButton.onclick = decrement;
  rightButton.onclick = increment;
  //src

  //append
  carousel.append(caroImg, leftButton, rightButton);

  //return
  return carousel;
}

const entryPoint = document.querySelector(".carousel-container");

const caro = constructor();
// entryPoint.append(constructor());
entryPoint.appendChild(caro);
