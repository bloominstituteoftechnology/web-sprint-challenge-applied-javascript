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

//promises
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    const info = res.data.articles;
    for (const articleGroup in info) {
      const articleList = info[articleGroup];
      articleList.map((info) => cards(info));
    }
  })
  .catch((err) => {
    console.log("whoa buddy theres an issue here!", err);
  });
//injection point
const cardContainer = document.querySelector(".cards-container");

let cards = (info) => {
  //create elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("span");
  //appendchildren
  cardContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  card.appendChild(imgContainer);
  card.appendChild(img);
  card.appendChild(name);
  //add classlist
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  //content
  headline.textContent = `headline: ${info.headline}`;
  author.textContent = `id: ${info.id}`;
  img.src = `${info.authorPhoto}`;
  name.textContent = `name: ${info.authorName}`;
  //event listeners
  card.addEventListener("click", (e) => {
    console.log(`You clicked ${e.target}`);
  });
  //return something
  return card;
};
