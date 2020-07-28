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
let i = 0;
const img = document.createElement('img');
img.classList.add('slide');
img.setAttribute('src', './assets/carousel/computer.jpeg')
img.style.display = "block";
img.style.marginBottom = "80px";
function myCarousel(){
//setting up elements
	const carousel = document.createElement('div');
	//const img2 = document.createElement('img');
	//const img3 = document.createElement('img');
	//const img4 = document.createElement('img');
	const leftButton = document.createElement('div');
	const rightButton =document.createElement('div');
	
//setting up classes 
	carousel.classList.add('carousel');
	leftButton.classList.add('left-button');
	rightButton.classList.add('right-button');
	//img2.classList.add('slide');
	//img3.classList.add('slide');
	//img4.classList.add('slide');
//setting attributes
	carousel.append(img,leftButton,rightButton);
	document.querySelector('.carousel-container').append(carousel);
//event listeners
	leftButton.addEventListener('click', event => {
	if(i > 0){
		i -= 1;
		img.setAttribute('src', images[i]);
		}
	if(i === 0){
		i = 3;
		img.setAttribute('src', images[i]);
	}
	});
	rightButton.addEventListener('click', event => {
		if(i <= images.length){
		i += 1;
		img.setAttribute('src', images[i]);
		}
		if(i == 4){
			i = 0;
			img.setAttribute('src', images[i]);
		}
	});
		const img1 = './assets/carousel/computer.jpeg';
	const img2 = './assets/carousel/mountains.jpeg';
	const img3 =  './assets/carousel/trees.jpeg';
	const img4 = './assets/carousel/turntable.jpeg';
	const images = [
		img1,img2,img3,img4
	];
	return carousel;
}
function letItRoll(){

	const img1 = './assets/carousel/computer.jpeg';
	const img2 = './assets/carousel/mountains.jpeg';
	const img3 =  './assets/carousel/trees.jpeg';
	const img4 = './assets/carousel/turntable.jpeg';
	const images = [
		img1,img2,img3,img4
	];
	let time = 5000;
	let slideIndex = 0;
	let x = document.querySelector('.slide');
if(i < images.length){
	img.setAttribute('src', images[i]);
		i++;
}
	if(i == 4){
			i = 0;
			img.setAttribute('src', images[i]);
		}
console.log(images[i]);
		setTimeout(letItRoll,time);
	}

/*
	let i = 0;
	let time = 3000;
	let slideIndex = 0;
	let x = document.getElementsByClassName('slide');
	
	for(i =0; i < x.length; i++){
		x[i].style.display = "none";
	slideIndex++;
	if(slideIndex > x.length) {
		slideIndex = 1; 
	}
	x[slideIndex-1].style.display = "block";
	}
	setTimeout(letItRoll,3000);
	}
	*/
	myCarousel();
	letItRoll();