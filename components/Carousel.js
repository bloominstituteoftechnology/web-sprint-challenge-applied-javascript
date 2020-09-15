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

    const carousel_div = document.createElement('div');
    const left_button = document.createElement('div')
    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    const img4 = document.createElement('img')
    const right_button = document.createElement('img')


    carousel_div.classList.add('carousel')
    left_button.classList.add('left-button')
    img1.classList.add('img')
    img2.classList.add('img')
    img3.classList.add('img')
    img4.classList.add('img')
    right_button.classList.add('right-button')
    





  }