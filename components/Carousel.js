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

/* HTML
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselMaker = () =>{
  //set variables
  const carousel = document.createElement('div')
  const leftBtn = document.createElement('div')
  const img1 = document.createElement('img')
  const img2 = document.createElement('img')
  const img3 = document.createElement('img')
  const img4 = document.createElement('img')
  const rightBtn = document.createElement('div')
  // set classnames
  carousel.className ='carousel'
  leftBtn.className ='left-button'
  rightBtn.className = 'right-button'

 //get img sources

  img1.src ='./assets/carousel/mountains.jpeg'
  img2.src ='./assets/carousel/computer.jpeg'
  img3.src ='/assets/carousel/trees.jpeg'
  img4.src ='./assets/carousel/turntable.jpeg'

  //append append append

  carousel.appendChild(leftBtn)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)
  carousel.appendChild(rightBtn)

  // console.log(carousel)

  return carousel

}
//declare carosule cont
const carouselContainer =document.querySelector('.carousel-container')
carouselContainer.appendChild(carouselMaker());


