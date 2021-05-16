import axios from"axios"
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
  const cardDiv = document.createElement(`div`)
  const headlineDiv = document.createElement(`div`)
  const authorDiv = document.createElement(`div`)
  const imageContainerDiv = document.createElement(`div`)
  const imageData = document.createElement(`img`)
  const authorNameSpan = document.createElement(`span`)
  
  //adding classes
  cardDiv.classList.add(`card`)
  headlineDiv.classList.add(`headline`)
  authorDiv.classList.add(`author`)
  imageContainerDiv.classList.add(`img-container`)
  
  //adding info
  headlineDiv.textContent = article.headline;
  imageData.setAttribute(`src`, article.authorPhoto);
  authorNameSpan.textContent = article.authorName;
//appending
cardDiv.appendChild(headlineDiv)
cardDiv.appendChild(authorDiv)
authorDiv.appendChild(imageContainerDiv)
imageContainerDiv.appendChild(imageData)
authorDiv.appendChild(authorNameSpan)

  return cardDiv
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
//   //
// const card = document.querySelector(selector)
// axios
// .get(`https://lambda-times-api.herokuapp.com/articles`)
// .then(response => {
//   console.log(response)
//   response.data.articles.forEach(element => {
//     const ele = Card(element)
  
//     card.appendChild(ele)
//   });

// })
//geting topics
const target = document.querySelector(selector)
axios
.get(`https://lambda-times-api.herokuapp.com/topics`)
.then(response => {
  const array = response.data.topics
  array.pop()
  array.push('node')
//doing stuff
  console.log(array)
  array.forEach(item => {
    axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(response =>{
      
      const current = response.data.articles[item]
      const oneAtATime = Array.from(current)
      oneAtATime.forEach(item => {
      const final = Card(item)
      target.appendChild(final)
      })
    }

    )
  });


})



}

export { Card, cardAppender }
