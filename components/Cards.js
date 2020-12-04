// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles

const cardEntry = document.querySelector(".cards-container");

axios.get("https://api.github.com/users/lindsay-deaton").then((res) => {
  const newCard = timesComponent(res.data);
  console.log(newCard);
  cardEntry.appendChild(newCard);
});
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
function timesComponent(data) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  //no need to append inside function

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = data;
  cardDiv.appendChild(headlineDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  authorDiv.appendChild(imgContainer);

  const newImg = document.createElement("img");
  newImg.src = data;
  imgContainer.appendChild(newImg);

  const bySpan = document.createElement("span");
  bySpan.textContent = "By " + data;
  authorDiv.appendChild(bySpan);

  return cardDiv;
}

// const firstAccordion = timesComponent()
