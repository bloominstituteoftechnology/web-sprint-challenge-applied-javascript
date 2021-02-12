const Header = (title, date, temp) => {
	// TASK 1
	// ---------------------
	// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	//
	//  <div class="header">
	//    <span class="date">{ date }</span>
	//    <h1>{ title }</h1>
	//    <span class="temp">{ temp }</span>
	//  </div>
	//
	let headerDiv = document.createElement("div");
	let dateSpan = document.createElement("span");
	let headerH1 = document.createElement("h1");
	let tempSpan = document.createElement("span");

	headerDiv.appendChild(dateSpan);
	headerDiv.appendChild(headerH1);
	headerDiv.appendChild(tempSpan);

	headerDiv.classList.add("header");
	dateSpan.classList.add("date");
	tempSpan.classList.add("temp");

	dateSpan.textContent = date;
	headerH1.textContent = title;
	tempSpan.textContent = temp;

	return headerDiv;
};

const headerAppender = (selector) => {
	// TASK 2
	// ---------------------
	// Implement this function taking a css selector as its only argument.
	// It should create a header using the Header component above, passing arguments of your choosing.
	// It should append the header to the element in the DOM that matches the given selector.
	//

	document
		.querySelector(selector)
		.appendChild(Header("Lambda Times", "Febuary 12th,2021", "97"));
};

export { Header, headerAppender };
