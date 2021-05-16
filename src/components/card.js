  import axios from "axios";
  
  
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


// const Card = (article) => {

//   // Create elements.
//   const cardContainer = document.createElement('div')
//     const headline = document.createElement('div')
//     const author = document.createElement('div')
//       const imgContainer = document.reateElement('div')
//         const image = document.createElement('img')
//       const authorSpan = document.createElement('span')

//       console.log(cardContainer);

//   // Create classes.
//   cardContainer.classList('card')
//   headline.classList('headline')
//   author.classList('author')
//   imgContainer.classList('img-container')

//   // Create content.
//   headline.textContent = `${article.headline}`
//   image.setAttribute("src", `${article.authorPhoto}`)
//   authorSpan.textContent = `${article.authorNAme}`

//   // Appending
//   cardContainer.appendChild(headline)
//   author.appendChild(imgContainer)
//   imgContainer.appendChild(image)
//   author.appendChild(author)

//   cardContainer.addEventListener('click', e => {
//     console.log(e)

//   })
//   console.log('testing...........');

//   return cardContainer;
// }
//______________________________________________

const Card = (article) => {

  const cardContainer = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorSpan = document.createElement('span')

    headline.textContent = article.headline
    image.setAttribute('src', article.authorPhoto)
    authorSpan.textContent = article.authorName

    cardContainer.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    cardContainer.appendChild(headline)
    cardContainer.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorSpan)
    imgContainer.appendChild(image)

    cardContainer.addEventListener('click', event => {
      console.log(event)
    })

  
    return cardContainer
}


//_____________________________________________



  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!

  // Create a card from each and every article object in the response, using the Card component.

  // Append each card to the element in the DOM that matches the selector passed to the function.
  


  const cardAppender = (selector) => {
    const main = document.querySelector(selector);
    axios
      .get("https://lambda-times-api.herokuapp.com/articles")
      .then(item => {
        const articles = item.data.articles;
        for(const article in articles){            // for in loop
          console.log('look', articles[article]);
          articles[article].forEach(i => main.appendChild(Card(i)))
        }
          })
      .catch(err => console.log(err))
  }



















export { Card, cardAppender }
