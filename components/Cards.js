/** @format */

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
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
// Add a listener for click events so that when a user clicks on a card, the headline of the article constis
// logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardCont = document.querySelector(".cards-container");
const articleURL = "https://lambda-times-backend.herokuapp.com/articles";

//getting from API axios

axios
  .get(articleURL)
  .then((response) => {
    const articles = response.data.articles;
    for (let names in articles) {
      articles[names].forEach((element) => {
        cardCont.appendChild(cardMaker(element));
      });
    }
  })
  .catch((error) => console.log("zero percent chance of success captain"));

function cardMaker(obj) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  card.className = "card";
  headline.className = "headline";
  author.className = "author";
  imgCont.className = "image-container";

  img.src = obj.authorPhoto;

  headline.textContent = obj.headline;
  authorName.textContent = obj.authorName;

  headline.addEventListener("click", () => {
    console.log(headline.textContent);
  });

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(authorName);

  return card;
}
