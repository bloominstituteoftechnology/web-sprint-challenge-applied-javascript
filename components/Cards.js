// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following:
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

const cardEntry = document.querySelector(".cards-container");

axios.get("https://lambda-times-api.herokuapp.com/articles").then((res) => {
  const info = res.data.articles;
  const articleTypes = Object.keys(info);
  articleTypes.forEach((data) => {
    const innerdata = info[data];
    innerdata.forEach((items) => {
      const newData = timesComponent(items);
      cardEntry.appendChild(newData);
    });
  });
});

function timesComponent(data) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.addEventListener("click", () => {
    console.log("The viewer has clicked the card!");
  });
  //no need to append inside function

  const headlineDiv = document.createElement("div");
  headlineDiv.classList.add("headline");
  headlineDiv.textContent = data.headline;
  cardDiv.appendChild(headlineDiv);

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  authorDiv.appendChild(imgContainer);

  const newImg = document.createElement("img");
  newImg.src = data.authorPhoto;
  imgContainer.appendChild(newImg);

  const bySpan = document.createElement("span");
  bySpan.textContent = "By " + data.authorName;
  authorDiv.appendChild(bySpan);

  return cardDiv;
}
