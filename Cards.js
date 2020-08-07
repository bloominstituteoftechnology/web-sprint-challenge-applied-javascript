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


axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(function (response) {
    console.log(response.data.articles.bootstrap)
  cardcont.appendChild(articleMaker(response.data.articles.javascript[0]))
  cardcont.appendChild(articleMaker(response.data.articles.javascript[1]))
  cardcont.appendChild(articleMaker(response.data.articles.javascript[2]))
  cardcont.appendChild(articleMaker(response.data.articles.javascript[3]))
  
  
   
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function (response) {
  
  });

const cardcont = document.querySelector('.cards-container')
console.log(cardcont)


function articleMaker (dataobject) {
 const cards = document.createElement('div')
 const headline = document.createElement('div')
 const author = document.createElement('div')
 const imgcont = document.createElement('div')
 const img  = document.createElement('img')
 const authorname = document.createElement('span')

 cards.className = "card"
 headline.className = "headline"
 author.className = "author"
 imgcont.className = "img-container"

 cards.appendChild(headline)
 cards.appendChild(author)
 author.appendChild(imgcont)
 imgcont.appendChild(img)
 author.appendChild(authorname)

 headline.textContent = dataobject.headline
 img.src = dataobject.authorPhoto
 authorname.textContent = dataobject.authorName

 cards.addEventListener ("click", (event) => {
    console.log(headline)
  })


 return cards

}
