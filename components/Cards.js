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
  .then(response => {
    console.log(response.data.articles)
    Object.values(response.data.articles).forEach((topic) => {
        topic.forEach(response => {
          document.querySelector('div.cards-container').appendChild(CardMaker(response))
        });
    });
})
    
 



  function CardMaker(response){
    // <div class="card">
    const card = document.createElement('div')
    card.setAttribute('class','card');
    // //   <div class="headline">{Headline of article}</div>
    const headline = document.createElement('div');
    headline.setAttribute('class','headline')
    headline.textContent = response.headline;
    card.appendChild(headline)
    // //   <div class="author">
    const author = document.createElement('div');
    author.setAttribute('class','author')
    card.appendChild(author)
    // //     <div class="img-container">
    const imgCont = document.createElement('div');
    imgCont.setAttribute('class','img-container')
    author.appendChild(imgCont)
    // //       <img src={url of authors image} />
    const img = document.createElement('img');
    img.setAttribute('src',response.authorPhoto)
    imgCont.appendChild(img)
    // //     <span>By {author's name}</span.
    const span = document.createElement('span')
    span.textContent = `By ${response.authorName}`
    card.appendChild(span)
    // //   </div>
    card.addEventListener('click', event => {
        console.log(headline.textContent)
        
    })
    return card
}
