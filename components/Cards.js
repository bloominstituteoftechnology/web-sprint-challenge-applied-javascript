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

const request = axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    const cardsContainer = document.querySelector(".cards-container");
    response.data.articles.bootstrap.forEach((element) => {
      cardsContainer.appendChild(cardCreator(element));
    });
    response.data.articles.javascript.forEach((element) => {
      cardsContainer.appendChild(cardCreator(element));
    });
    response.data.articles.jquery.forEach((element) => {
      cardsContainer.appendChild(cardCreator(element));
    });
    response.data.articles.node.forEach((element) => {
      cardsContainer.appendChild(cardCreator(element));
    });
    response.data.articles.technology.forEach((element) => {
      cardsContainer.appendChild(cardCreator(element));
    });

    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

function cardCreator(articles) {
  //   console.log(articles);

  // main container
  const newCard = document.createElement("div");

  const headline = document.createElement("div");

  const subContainer = document.createElement("div");

  // sub Container

  const imgContainer = document.createElement("div");

  const authorName = document.createElement("span");

  // image nested in imgContainer

  const image = document.createElement("img");

  // newCard is the parent

  newCard.appendChild(headline);

  newCard.appendChild(subContainer);

  //sub container is a child of new card holding everything else

  subContainer.appendChild(imgContainer);

  //image

  imgContainer.appendChild(image);

  subContainer.appendChild(authorName);

  // Element Classes

  newCard.classList.add("card");

  headline.classList.add("headline");

  subContainer.classList.add("author");

  imgContainer.classList.add("img-container");

  // defining what the elements are

  image.src = articles.authorPhoto;

  headline.textContent = articles.headline;

  authorName.textContent = `By ${articles.authorName}`;

  // event handler

  headline.addEventListener("click", (e) => {
    console.log("headline clicked");
  });

  console.log(newCard);
  return newCard;
}
