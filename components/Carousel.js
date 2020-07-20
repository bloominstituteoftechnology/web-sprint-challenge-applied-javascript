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

const imageObj = {
  0: "./assets/carousel/mountains.jpeg",
  1: "./assets/carousel/computer.jpeg",
  2: "./assets/carousel/trees.jpeg",
  3: "./assets/carousel/turntable.jpeg"
}

console.log(imgDictionary)





import axios from 'axios'

function constructor() {
  //objects
const carousel = document.createElement('div')
const leftButton = document.createElement('div')
const rightButton = document.createElement('div')
const img1 = document.createElement('img')


//classes
carousel.classList.add('carousel')
leftButton.classList.add('left-button')
rightButton.classList.add('right-button')

//src
const imageSRC = imageObj[0]
img1.src = './assets/carousel/mountains.jpeg'
img2.src = './assets/carousel/computer.jpeg'
img3.src = './assets/carousel/trees.jpeg'
img4.src = './assets/carousel/turntable.jpeg'

//append
carousel.append(leftButton,rightButton,img1)

//return
return carousel
}


const entryPoint = document.querySelector('.carousel-container')



entryPoint.append(constructor())



