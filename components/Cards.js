// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
let cardGenerator = (article) => {
    //creating elements
    let card = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    let imgContainer = document.createElement('div')
    let img = document.createElement('img')
    let authorName = document.createElement('span')
    //setting classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    //setting attributes
    img.src = article.authorPhoto
    //Create text
    headline.innerHTML = article.headline
    authorName.innerHTML = article.authorName
   
    //creating append Hierarchy
    imgContainer.append(img)
    author.append(imgContainer,authorName)
    card.append(headline, author)
   //eventListenres
   card.addEventListener('click', () => {
       console.log(article.headline)
   })
    let cardContainer = document.querySelector('.cards-container')
    cardContainer.append(card)

}



import axios from 'axios';

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( response => {
      

        let test = response.data.articles
     
        
        Object.entries(test).map(([key, value]) => {
            value.map((E) => {
                cardGenerator(E)
            })
        })
     
    })
    .catch( error => {
        console.log("Error:", error);
    })
  