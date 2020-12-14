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
axios.get("https://lambda-times-api.herokuapp.com/articles").then((res) => {
  let articleCat = res.data.articles;
  console.log(res.data.articles);

  articleCat.bootstrap.forEach((article) => {
    document
      .querySelector(".cards-container")
      .appendChild(createCards(article));
  });
  articleCat.javascript.forEach((article) => {
    document
      .querySelector(".cards-container")
      .appendChild(createCards(article));
  });
  articleCat.jquery.forEach((article) => {
    document
      .querySelector(".cards-container")
      .appendChild(createCards(article));
  });
  articleCat.node.forEach((article) => {
    document
      .querySelector(".cards-container")
      .appendChild(createCards(article));
  });
  articleCat.technology.forEach((article) => {
    document
      .querySelector(".cards-container")
      .appendChild(createCards(article));
  });
});

function createCards(article) {
  let card = document.createElement("div");
  card.classList.add("card");

  let headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  card.appendChild(headline);
  card.addEventListener("click", (e) => {
    console.log(article.headline);
  });

  let author = document.createElement("div");
  author.classList.add("author");
  card.appendChild(author);

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  author.appendChild(imgContainer);

  let img = document.createElement("img");
  img.setAttribute("src", article.authorPhoto);
  imgContainer.appendChild(img);

  let authorName = document.createElement("span");
  authorName.textContent = `By ${article.authorName}`;
  author.appendChild(authorName);

  return card;
}
