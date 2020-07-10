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
const carouselContainer = document.querySelector(".carousel-container")
function carouselCreater () {
  // creating the markup 
const carousel = document.createElement('div')
carousel.className = "carousel"
const lb = document.createElement('div')
lb.className = "left-button"
const image1 = document.createElement('img')
image1.src = "./assets/carousel/mountains.jpeg"
image1.className = "yes"
const image2 = document.createElement('img')
image2.src = "./assets/carousel/computer.jpeg"
image2.className = "display-off"
const image3 = document.createElement('img')
image3.src = "./assets/carousel/trees.jpeg"
image3.className = "display-off"
const image4 = document.createElement('img')
image4.src = "./assets/carousel/turntable.jpeg"
image4.className = "display-off"
const rb = document.createElement('div')
rb.className = "right-button"
// creating the carousal showing function 
function show(){
  if (image1.className === "yes"){
    image1.classList.toggle("display-off")
    image2.classList.toggle("display-off")
    image1.classList.toggle("yes")
    image2.classList.toggle("yes")
  } else if (image2.className === "yes"){
    image2.classList.toggle("display-off")
    image3.classList.toggle("display-off")
    image2.classList.toggle("yes")
    image3.classList.toggle("yes")
  } else if (image3.className === "yes"){
    image3.classList.toggle("display-off")
    image4.classList.toggle("display-off")
    image3.classList.toggle("yes")
    image4.classList.toggle("yes")
  } else if (image4.className === "yes") {
    image4.classList.toggle("display-off")
    image1.classList.toggle("display-off")
    image4.classList.toggle("yes")
    image1.classList.toggle("yes")
  }
  gsap.from('.yes' , {duration: 3, opacity: 0, scale: 0.3 , ease: 'back'})
}
// adding the events to the button and calling the show function 
rb.addEventListener('click', show)
lb.addEventListener('click', show)
carousel.append(lb, image1, image2, image3, image4, rb)
  return carousel
}
carouselContainer.appendChild(carouselCreater())