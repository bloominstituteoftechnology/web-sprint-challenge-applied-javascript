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

  const entry = document.querySelector(`.card`)
  const card = document.createElement('div') 
  card.classList.add(`card`)
  const headline = document.createElement(`div`)
  const author = document.createElement('div') 
  author.classList.add(`author`)
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  const img = document.createElement(`img`)
  const  authorName = document.createElement(`span`)

  entry.appendChild(card)
  card.appendChild(headline)
  headline.appendChild(headline)
  author.appendChild(author)
  imgContainer.appendChild(imgContainer)
  img.appendChild(img)
  authorName.appendChild(authorName)

return article
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
  card.forEach(name =>
    {
      axios
      .get(`https://lambda-times-api.herokuapp.com/${topics}`)
      .then(response=>{
        topics(response.topics)
      }
        
      )
    }
  )

}

export { Card, cardAppender }
