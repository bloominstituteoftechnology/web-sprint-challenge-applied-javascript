// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
function articleMaker(obj){
//creating elements
	const card = document.createElement('div');
	const headLine = document.createElement('div')
	const author = document.createElement('div');
	const imgDiv = document.createElement('div');
	const img = document.createElement('img');
	const span = document.createElement('span');
	
//adding classes and attributes
	card.classList.add('card');
	headLine.classList.add('headline');
	author.classList.add('author');
	imgDiv.classList.add('img-container');
	img.setAttribute('src',obj.authorPhoto);
	
//content
	headLine.textContent = obj.headline;
	span.textContent = obj.authorName;
	
//putting it alllll together
	imgDiv.appendChild('img');
	author.append(imgDiv,span);
	card.append(headLine,author);
	
//return finished Article
	return card;
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(success => {
	console.log(success);
	success.data.articles.forEach(element => {
		console.log(element);
	});
})
.catch(failure => {
	console.log(failure);
});