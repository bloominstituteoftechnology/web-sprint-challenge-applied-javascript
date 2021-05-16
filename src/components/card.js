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
  const headLine = document.createElement('div')
  const author = document.createElement('div')
  const imgContainer = document.createElement('div')
  const authorPhoto = document.createElement('img')
  const authorName = document.createElement('span')

  
  headLine.textContent(article.headLine)
  authorPhoto.textContent(article.authorPhoto)
  authorName.textContent(article.authorName)
  
  card.classList.add('card')
  headLine.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  card.appendChild(headLine)
  card.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(authorName)
  imgContainer.appendChild(authorPhoto)

  card.addEventListener('click',()=>{
    console.log(article.headLine)
  })
  return card
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
  const cardContainer = document.querySelector(selector)
  axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res =>{
      res.data.article.javascript.forEach((article) =>{
        const js = Card(article)
        cardContainer.appendChild(js)
      })
      res.data.article.bootstrap.forEach((article)=>{
        const boots = Card(article)
        cardContainer.appendChild(boots)
      })
      res.data.article.technology.forEach((article)=>{
        const tech = Card(article)
        cardContainer.appendChild(tech)
      })
      res.data.article.jquery.forEach((article)=>{
        const jq = Card(article)
        cardContainer.appendChild(jq)
      })
      res.data.article.node.forEach((article)=>{
        const nodes = Card(article)
        cardContainer.appendChild(nodes)
      })
    })
    .catch(err =>{
      console.log(err)
    })
    return cardContainer
  }

export { Card, cardAppender }
