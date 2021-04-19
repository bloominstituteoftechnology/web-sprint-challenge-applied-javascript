const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //

  const mainCard = document.createElement('div');
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imageContainer = document.createElement('div')
  const image = document.createElement('img')
  const authorName = document.createElement('span')

  mainCard.appendChild(headline)
  mainCard.appendChild(author)
  author.appendChild(imageContainer)
  imageContainer.appendChild(image)
  author.appendChild(authorName)


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
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


  cardAppender().classLiss.add(selector)
  
  axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((res) => {
		const articles = res.data.articles;
		// console.log(articles, 'show articles');
		const bootstrap = articles.bootstrap;
		const javascript = articles.javascript;
    const technology = articles.technology;

		// --- This is one option to do it and then forEach over this to add to the DOM. Array of just javascript articles
const cardContainer = document.querySelector('.cards-container')
		const allArticles = bootstrap.concat(javascript,technology);
		// console.log(allArticles, 'Array of articles');
		allArticles.forEach((item) => {
			const createdArticle = Card(item);
			// console.log(createdArticle, 'Creating in articles');
			cardContainer.appendChild(createdArticle);
		});
	})
	.catch((err) => {
		console.log('Error!', err);
	});

}

export { Card, cardAppender }
