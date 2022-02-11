const Card = (article) => {
  const cardDiv = document.createElement('div')
  const cardHeadline = document.createElement('div')
  const authorInfo = document.createElement('div')
  const photoCont = document.createElement('div')
  const authorPhoto = document.createElement('img')
  const name = document.createElement('span')

  cardDiv.classList.add('card')
  cardHeadline.classList.add('headline')
  authorInfo.classList.add('author')
  photoCont.classList.add('img-container')

  cardHeadline.textContent = article.headline
  name.textContent = `By ${article.authorName}`

  authorPhoto.src = article.authorPhoto

  cardDiv.appendChild(cardHeadline)
  cardDiv.appendChild(authorInfo)
  authorInfo.appendChild(photoCont)
  photoCont.appendChild(authorPhoto)
  authorInfo.appendChild(name)

  cardDiv.addEventListener('click', () => {
    console.log(cardHeadline)
  })

  return cardDiv

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
