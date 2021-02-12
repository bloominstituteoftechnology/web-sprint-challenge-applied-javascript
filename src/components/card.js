import axios from "axios";

const Card = (article) => {
	// TASK 5
	// ---------------------
	// Implement this function, which should return the markup you see below.
	// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
	// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
	// The text inside elements will be set using their `textContent` property (NOT `innerText`).
	// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
	//
	// <div class="card">
	//   <div class="headline">{ headline }</div>
	//   <div class="author">
	//     <div class="img-container">
	//       <img src={ authorPhoto }>
	//     </div>
	//     <span>By { authorName }</span>
	//   </div>
	// </div>
	//

	const { authorName, authorPhoto, headline } = article;

	let mainDiv = document.createElement("div");
	let headlineDiv = document.createElement("div");
	let authorDiv = document.createElement("div");
	let imgDiv = document.createElement("div");
	let authorPhotoImg = document.createElement("img");
	let authorSpan = document.createElement("span");

	mainDiv.classList.add("card");
	headlineDiv.classList.add("headline");
	authorDiv.classList.add("author");
	imgDiv.classList.add("img-container");

	mainDiv.appendChild(headlineDiv);
	mainDiv.appendChild(authorDiv);
	authorDiv.appendChild(imgDiv);
	imgDiv.appendChild(authorPhotoImg);
	authorDiv.appendChild(authorSpan);

	headlineDiv.textContent = headline;
	authorPhotoImg.src = authorPhoto;
	authorSpan.textContent = authorName;

	return mainDiv;
};

const cardAppender = (selector) => {
	// TASK 6
	// ---------------------
	// Implement this function that takes a css selector as its only argument.
	// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
	// However, the articles do not come organized in a single, neat array. Inspect the response closely!
	// Create a card from each and every article object in the response, using the Card component.
	// Append each card to the element in the DOM that matches the selector passed to the function.
	//
	axios
		.get("https://lambda-times-api.herokuapp.com/articles")
		.then((res) => {
			let cardData = res.data.articles.javascript;
			for (let i = 0; i < cardData.length; i++) {
				document.querySelector(selector).appendChild(Card(cardData[i]));
			}
		})
		.catch((error) => {
			console.log(error);
		});
};

export { Card, cardAppender };
