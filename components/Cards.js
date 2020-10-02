import axios from 'axios'

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

const cardContainer = document.querySelector('.cards-container')



function cardMaker (data){
    // Instatiation
    const card = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const headline = document.createElement('div')
    const h3 = document.createElement('h3')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    

    // CLASSES
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    //HIERArchy set up
    card.appendChild(headline)
    headline.appendChild(author)
    headline.appendChild(h3)
    author.appendChild(imgContainer)
    author.appendChild(span)
    imgContainer.appendChild(img)
// Content 
for(let i=0;i<data.length;i++){
    h3.textContent = data[i].headline
    img.src = data[i].authorPhoto
    span.textContent = data[i].authorName
  
}

  
card.addEventListener('click', () => {
    console.log(data.headline)
})
    //EVENT LISTENERS
    
    return card
    
}


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    const articles = Object.values(res.data.articles)
    const Articles2 = [].concat.apply([], articles)
    console.log(Articles2)
    Articles2.map(data => {
        cardContainer.appendChild(cardMaker(Articles2))
    })
})
.catch(err => {
    console.log(err)
});
