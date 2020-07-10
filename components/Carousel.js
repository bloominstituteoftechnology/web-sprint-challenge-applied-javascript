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

function carousel () {
  const carouselDIV = document.createElement('div')
  const carouselLeft = document.createElement('div')
  const carouselIMG1 = document.createElement('img')
  const carouselIMG2 = document.createElement('img')
  const carouselIMG3 = document.createElement('img')
  const carouselIMG4 = document.createElement('img')
  const carouselRight = document.createElement('div')

  // const carouselButton = document.createElement('button')
  // carouselButton.classList.add('carouselButton')
  // carouselButton.textContent = "See the Images"

  carouselDIV.classList.add('carousel')
  carouselLeft.classList.add('left-button')
  carouselIMG1.classList.add('image1')
  carouselIMG2.classList.add('image2')
  carouselIMG3.classList.add('image3')
  carouselIMG4.classList.add('image4')
  carouselRight.classList.add('right-button')

  carouselIMG1.src = "./assets/carousel/mountains.jpeg"
  carouselIMG2.src = "./assets/carousel/computer.jpeg"
  carouselIMG3.src = "./assets/carousel/trees.jpeg"
  carouselIMG4.src = "./assets/carousel/turntable.jpeg"

  carouselLeft.innerHTML = " &lArr; "
  carouselRight.innerHTML = " &rArr; "

  carouselDIV.appendChild(carouselLeft)
  carouselDIV.appendChild(carouselIMG1)
  carouselDIV.appendChild(carouselIMG2)
  carouselDIV.appendChild(carouselIMG3)
  carouselDIV.appendChild(carouselIMG4)
  carouselDIV.appendChild(carouselRight)

      carouselRight.addEventListener('click', () => {
        document.querySelector('.image1').style.display = "block"
        carouselLeft.style.display = "none"
        carouselRight.classList.add('next-image-2')
      })
  if(carouselRight.classList.contains('next-image-2')) {
    const nextImage2 = document.querySelector('.next-image-2')
    nextImage2.addEventListener('click', () => {
      document.querySelector('.image2').style.display = "block"
      document.querySelector('.image1').style.display = "none"
      carouselLeft.style.display = "block"
      carouselRight.classList.remove('next-image-2')
      carouselRight.classList.add('next-image-3')
  })
}
if(carouselRight.classList.contains('next-image-3')) {
  const nextImage3 = document.querySelector('.next-image-3')
    nextImage3.addEventListener('click', () => {
      document.querySelector('.image3').style.display = "block"
      document.querySelector('.image2').style.display = "none"
      carouselLeft.style.display = "block"
      carouselRight.classList.remove('next-image-3')
      carouselRight.classList.add('next-image-4')
  })
}
  if(carouselRight.classList.contains('next-image-4')) {
    const nextImage4 = document.querySelector('.next-image-4')
    nextImage4.addEventListener('click', () => {
      document.querySelector('.image4').style.display = "block"
      document.querySelector('.image3').style.display = "none"
      carouselLeft.style.display = "block"
      carouselRight.style.display = "none"
  })
}
  return carouselDIV
}

const carouselContainer = document.querySelector('.carousel-container')

carouselContainer.appendChild(carousel())