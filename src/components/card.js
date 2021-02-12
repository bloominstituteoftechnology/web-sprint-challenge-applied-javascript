import axios from 'axios'

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

  const card = document.createElement('div')
  card.classList.add('card')

  const cardHeadline = document.createElement('div')
  cardHeadline.classList.add('headline')
  cardHeadline.textContent = `${article.headline}`
  card.appendChild(cardHeadline)

  const cardAuthor = document.createElement('div')
  cardAuthor.classList.add('author')
  card.appendChild(cardAuthor)

  const cardImgContainer = document.createElement('div')
  cardImgContainer.classList.add('img-container')
  cardAuthor.appendChild(cardImgContainer)

  const cardAuthorImg = document.createElement('img')
  cardAuthorImg.src = `${article.authorPhoto}`
  cardImgContainer.appendChild(cardAuthorImg)

  const cardAuthorName = document.createElement('span')
  cardAuthorName.textContent = `By ${article.authorName}`
  cardAuthor.appendChild(cardAuthorName)

  return card
}

Card('1')


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardContainer = document.querySelector(selector)
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res => {
      res.data.articles.forEach(article => {
        const card = Card(article)
        cardContainer.appendChild(card)
      })



      //attempt 2
      // const arrayArticles = res.data.articles
      // debugger
      // const cardContainer = document.querySelector(selector)
      // console.log(arrayArticles)
      // arrayArticles.data.forEach(article => {
      //   let authorCard = Card(article)
      //   cardContainer.appendChild(authorCard)
      // })

      //attempt 1
      // const arrayArticles = res.data.articles
      // arrayArticles.forEach(article => {
      //   const cardContainer = document.querySelector(selector)
      //   cardContainer.appendChild(Card(article))
      // })

    })
    .catch(err => {
      console.log('There has been an error')
    })

}

export { Card, cardAppender }
