const Card = (article) => {
  
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  const cardHeadline = document.createElement('div')
  cardHeadline.textContent = `${article.headline}`
  cardHeadline.classList.add('headline')
  cardDiv.appendChild(cardHeadline)

  const cardAuthor = document.createElement('div')
  cardAuthor.classList.add('author')
  cardDiv.appendChild(cardAuthor)

  const cardImgContainer = document.createElement('div')
  cardImgContainer.classList.add('img-container')
  cardDiv.appendChild(cardImgContainer)

  const cardImg = document.createElement('img')
  cardImg.src = `${article.authorPhoto}`
  cardImgContainer.appendChild(cardImg)

  const cardImgSpan = document.createElement('span')
  cardImgSpan.textContent = `By ${article.authorName}`
  cardImgContainer.appendChild(cardImg)

  cardDiv.addEventListener('click', () => {
    console.log(`${article.headline}`)
  })

  return cardDiv;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  
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
  /*
      if(selector === selector) {
        articles.forEach
      }
  
  
  
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
      .then(res => {
          res.data.articles.bootstrap.forEach(bootstraps => {
            Card(bootstraps);
          });
          console.log(res);
          //console.log(res.data.articles);
      })
      .catch(err => {
          console.log(err);
      })
*/

// eslint-disable-next-line no-undef
axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res => {
  res.data.topics.forEach(topic => {

    // eslint-disable-next-line no-undef
    axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
      let target = document.querySelector(selector);

      if(topic === 'node.js'){
        topic = 'node';
      } 
      let cardData = (res.data.articles[topic])

      for(let i = 0; i < cardData.length; i++){
        target.append(Card(cardData[i]));
      }
    })
  })
})

}

//cardAppender('.cards-container')

export { Card, cardAppender }
