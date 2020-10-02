// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
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

//test
// axios
// 	.get('https://lambda-times-api.herokuapp.com/articles')
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((drama) => {
// 		console.log(drama);
// 	});

const entry = document.querySelector('.cards-container');

axios
	.get('https://lambda-times-api.herokuapp.com/articles')
	.then((res) => {
		// console.log(res);
		// console.log(res.data);
		console.log(res.data.articles);
		// console.log(res.data.articles.length);
		// console.log(res.data.articles.bootstrap.length);
		// console.log(res.data.articles.bootstrap[0]);

		console.log(Object.keys(res.data.articles));

		Object.keys(res.data.articles).forEach((elem) => {
			console.log(Object.keys(res.data.articles)[elem]);
		});

		let obj = { first: 'hi' };
		console.log(obj[Object.keys(obj)[0]]); //returns hi

		console.log('--------------');

		// res.data.articles[Object.keys(res.data.articles)[0]]
		console.log(res.data.articles[Object.keys(res.data.articles)[0]]);
		console.log(
			res.data.articles[
				Object.keys(res.data.articles)[[Object.keys(res.data.articles)[0]]]
			]
		);

		// res.data.articles[Object.keys(res.data.articles)[0]]

		let articles = res.data.articles;
		let articleCats = [];
		Object.keys(articles).forEach((elem) => {
			articleCats.push(elem);
		});
		console.log('article titles -> ', articleCats);

		let articleTitles = [];
		articleCats.forEach((elem) => {
			console.log(articles[elem]);
			articleTitles.push(articles[elem].headline);
		});
		console.log('articleTitles -> ', articleTitles);

		// Object.keys(articles)[0]
		// console.log(Object.keys(articles)[0]);
	})
	.catch((err) => {
		console.log(err);
	});

function cardMaker({ headline, authorPhoto, authorName }) {
	//instantiate
	let card = document.createElement('div');
	const articleTitle = document.createElement('div');
	const authorDiv = document.createElement('div');
	const imgContainer = document.createElement('div');
	const img = document.createElement('img');
	const author = document.createElement('span');

	//class names
	// tab.classList.add('tab');
	card.classList.add('card');
	articleTitle.classList.add('headline');
	authorDiv.classList.add('author');
	imgContainer.classList.add('img-container');

	//text content
	// headline.textContent = article.headline;
	// console.log(headline);

	//listenr

	//return
	return card;
}
