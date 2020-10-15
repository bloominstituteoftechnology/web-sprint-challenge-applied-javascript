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

const allCards = document.querySelector(".cards-container");

const cardMaker = (data) => {
  const mainCard = document.createElement("div");
  const mainHeadline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("span");

  mainCard.classList.add("card");
  mainHeadline.classList.add("headline");
  mainHeadline.textContent = data.headline;
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  img.src = data.authorPhoto;
  name.textContent = `By ${data.authorName}`;

  mainCard.appendChild(mainHeadline);
  mainCard.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(name);

  return mainCard;
};

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    response.data.articles.javascript.forEach((article) => {
      allCards.appendChild(cardMaker(article));
      allCards.addEventListener("click", () => {
        console.log(article.headline);
      });
    });
    response.data.articles.bootstrap.forEach((article) => {
      allCards.appendChild(cardMaker(article));
      allCards.addEventListener("click", () => {
        console.log(article.headline);
      });
    });
    response.data.articles.technology.forEach((article) => {
      allCards.appendChild(cardMaker(article));
      allCards.addEventListener("click", () => {
        console.log(article.headline);
      });
    });
    response.data.articles.jquery.forEach((article) => {
      allCards.appendChild(cardMaker(article));
      allCards.addEventListener("click", () => {
        console.log(article.headline);
      });
    });
    response.data.articles.node.forEach((article) => {
      allCards.appendChild(cardMaker(article));
      allCards.addEventListener("click", () => {
        console.log(article.headline);
      });
    });
  });
