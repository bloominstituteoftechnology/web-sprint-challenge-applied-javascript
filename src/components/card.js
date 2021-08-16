const Card = (article) => {
  article.forEach(data => {
    const Ncard = document.createElement('div')
    Ncard.classList.add('card')
    
    const hLine = document.createElement('div')
    hLine.classList.add('headline')
    hLine.textContent = `${data.headline}`
    Ncard.appendChild(hLine)
    
    const auth = document.createElement('div')
    auth.classList.add('author')
    Ncard.appendChild(auth)
    
    const imgBox = document.createElement('div')
    imgBox.classList.add('img-container')
    auth.appendChild(imgBox)
    
    const authImg = document.createElement('img')
    authImg.src = `${data.authorPhoto}`
    imgBox.appendChild(authImg)
    
    const authSpan = document.createElement('span')
    authSpan.textContent = `${data.authorName}`
    auth.appendChild(authSpan)
    
    Ncard.addEventListener('click', (event) => {
      console.log(`${data.headline}`)
    })
    
    });
 
  return Ncard 
}

const cardAppender = (selector) => {
  const mountingpoint = document.querySelector(selector)
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(response => {
    console.log('RESPONSE', response)
    response.data.articles.forEach(things =>{
      const madeCard = Card(things)
      mountingpoint.appendChild(madeCard)
    })
    
  })
}


// const Card = (article) => {
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
// }

// const cardAppender = (selector) => {
  // TASK 6  Setting up codegrade
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
// }

export { Card, cardAppender }
