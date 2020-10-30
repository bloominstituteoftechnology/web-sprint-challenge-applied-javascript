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

//Write a function that takes a single article object and returns the following markup:

const artData = axios.get("https://lambda-times-api.herokuapp.com/articles")

const container = document.querySelector('.cards-container');
//Make function
function cardMaker(cardInfo) {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const authorsName = document.createElement("span");

    // add classes
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

    // add content
    headline.textContent = cardInfo["headline"];
    img.src = cardInfo["authorPhoto"];
    authorsName.textContent = cardInfo["authorName"];

    // HTML structure
    container.appendChild(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorsName);

    // Add eventlistener so headline is consoled 

    card.addEventListener("click", event => {
        console.log(`${event.currentTarget.querySelector("div.headline").textContent}`);
    });

    return card;

}

artData.then((response) => {
    const articles = response.data.articles;
    const content = Object.values(articles);

    content.forEach((element) => {
        element.forEach((ele) => {
            cardMaker(ele);
        });
    });
});