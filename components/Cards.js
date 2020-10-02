import axios from "axios";

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

axios.get("https://lambda-times-api.herokuapp.com/articles")
.then(res => {
  const articles = res.data.articles;
  for (const [topic, articlesArr] of Object.entries(articles)) {
    articlesArr.forEach(arr => {
      document.querySelector("div.cards-container").appendChild(makeArticle(arr));
    })
  }
})
.catch(e => {
  console.log(e);
});

function makeArticle(article) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgAuthor = document.createElement("img");
  const spanAuthor = document.createElement("span");
  
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(imgAuthor);
  author.appendChild(spanAuthor);

  
  card.classList.add("card");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  imgAuthor.setAttribute("src", article.authorPhoto);
  spanAuthor.textContent = `By ${article.authorName}`;

  card.addEventListener("click", (e) => {
    console.log(headline.innerText);
  })
  
  return card;
  
}