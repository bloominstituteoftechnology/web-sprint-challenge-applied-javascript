// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
//defining elements
	const header = document.createElement('div');
	const date = document.createElement('span');
	const h1 = document.createElement('h1');
	const temp = document.createElement('span');
	
//adding classes
	header.classList.add('header');
	date.classList.add('date');
	temp.classList.add('temp');
	
//adding content
	date.textContent = "March 28,2020";
	h1.textContent = "Lambda Times";
	temp.textContent = "98o";
	
//appending elements
	header.append(date,h1,temp);
	
//returning appended product
	return header;
}


//calling function to append it to the DOM
document.querySelector('.header-container').appendChild(Header());