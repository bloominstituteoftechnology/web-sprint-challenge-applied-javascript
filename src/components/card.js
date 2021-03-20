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
}

export { Card, cardAppender }

const axiosPromise = axios.get( 'https://lambda-times-api.herokuapp.com/articles')
.then((res) => {

  let javascript = res.data.articles.javascript
  let boostrap = res.data.articles.bootstrap
  let technology = res.data.articles.technology
  let jquery = res.data.articles.jquery
  let node = res.data.articles.node
  
  
  javascript.forEach((articles) => {
    const newCard = articleCard(article)
    document.querySelector('.cards-container').appendChild(newCard)
    console.log('this', article)
  })

  bootstrap.forEach((article) =>{
    const newCard = aritcleCard(articles)
    document.querySelector('.cards-container').appendChild(newCard)
    console.log('this',article)
  })

  technology.forEach((article) => {
    const newCard = articleCard(article)
    document.querySelector('.cards-container').appendChild(newCard)
    console.log('this', article)
  })
  jquery.forEach((article) => {
    const newCard = articleCard(article)
    document.querySelector('.cards-container').appendChild(newCard)
    console.log('this', article)

  })
  node.forEach((article) => {
    const newCard = articleCard(article)
    document.querySelector('.cards-container').appendChild(newCard)
    console.log('this', article)

  })
})

.catch(err => console.log(err))

function articleCard(article) {

  const card = document.createdElement('div');
  card.classList.add('card');

  const headline = document.createElement('div');

  headline.classList.add('headline');
  headline.textContent = article.headline

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imgContainer');

  const img = document.createElement('div');
  img.src = aritcle.authorPhoto

  const authorName = document.createElement('span');
  authorName.textContent = `By ${article.authorName}`

  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  card.appendChild(author);

  card.addEventListener('click', () =>{
    console.log(headline)
  })
  return card;
}