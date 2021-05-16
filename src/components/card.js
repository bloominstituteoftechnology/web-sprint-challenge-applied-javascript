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
const cards = document.querySelector(".cards-container")



axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then(res => {
    console.log(res.data)
    Object.values(res.data.articles).forEach((topic) => {
      topic.forEach(e => {
        cardMaker(e)
      })
    })
  })
  .catch(err => err)

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}
const cardMaker = (e) => {
  // Create Elements
  const cardDiv = document.createElement('div')
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgCont = document.createElement('div')
  const img = document.createElement('img')
  const name = document.createElement('span')


  // Add Classes
  cardDiv.classList.add("card")
  headline.classList.add("headline")
  author.classList.add("author")
  imgCont.classList.add("img-container")

  // Add Content
  headline.textContent = e.headline
  img.src = e.authorPhoto
  name.textContent = `By ${e.authorName}`

  // Append
  cards.appendChild(cardDiv)
  cardDiv.appendChild(headline)
  cardDiv.appendChild(author)
  author.appendChild(imgCont)
  imgCont.appendChild(img)
  author.appendChild(name)

  cardDiv.addEventListener('click', () => {
    console.log(e.headline)
  })

  return cards
