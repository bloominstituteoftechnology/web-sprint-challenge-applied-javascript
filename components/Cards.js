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
function articleCard(obj) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
  
    const header = document.createElement("div");
    header.classList.add("headline");
    header.textContent = obj.headline;
  
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("img-container");
  
    const newImg = document.createElement("img");
    newImg.src = obj.authorPhoto;
  
    const span = document.createElement("span");
    span.textContent = obj.authorName;

    const authorName = document.createElement("div")
    authorName.classList.add("author")
  
    newCard.appendChild(header);
    newCard.appendChild(authorName)
    authorName.appendChild(imageContainer);
    imageContainer.appendChild(newImg);
    authorName.appendChild(span);
  
    return newCard;
  }
  
  const mainContainer = document.querySelector(".cards-container");
  
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then(response => {
      console.log(response.data.articles);
      for (let key in response.data.articles) {
        for (let i = 0; i < response.data.articles[key].length; i++) {
          const newCard = articleCard(response.data.articles[key][i]);
          mainContainer.appendChild(newCard);
        }
      }
    })
    .catch(err => {
      console.log(err);
    });

    