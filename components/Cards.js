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

function cardMaker(data){
    const makeCard = document.createElement.add("div");
    const headline = document.createElement.add("div");
    const author = document.createElement.add("div");
    const imgCont = document.createElement.add("div");
    const img = document.createElement.add("img")
    const by = document.createElement.add("span");
    
    makeCard.appendChild(headline);
    makeCard.appendChild(author);
    makeCard.appendChild(imgCont);
    makeCard.appendChild(img);
    makeCard.appendChild(by);

    makeCard.classList.add("card");
    headline.classlist.add("headline");
    author.classList.add("author");
    imgCont.classList.add("img-container");

    headline.textContent = data.headline;
};