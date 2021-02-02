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

function articleMaker({ authorName, authorPhoto, headline }) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const img = document.createElement("img");
  const authName = document.createElement("span");

  // let artCard = document.body.appendChild(card)
  card.appendChild(title);
  card.appendChild(author);
  author.appendChild(imgCont);
  author.appendChild(authName);
  imgCont.appendChild(img);

  card.classList.add("card");
  title.classList.add("headline");
  imgCont.classList.add("img-container");

  title.textContent = headline;
  img.src = authorPhoto;
  authorPhoto, (textContent = authorName);

  card.addEventListener("click", () => {
    console.log(title);
  });

  return card;
}
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    for ( let prop in res.data.articles){
        res.data.articles[prop].forEach(()=>{
            const newCard = articleMaker(bootstrap, javascript, jquery, node, technology)
            document.body.appendChild(newCard)
        })
    }

    // res.data.articles[0].forEach(() => {
    //   const newCard = articleMaker(bootstrap);
    //   document.body.appendChild(newCard);
    // });

    // javascript.forEach(() => {
    //   const newCard = articleMaker(javascript);
    //   document.body.appendChild(newCard);
    // });

    // jquery.forEach(() => {
    //   const newCard = articleMaker(jquery);
    //   document.body.appendChild(newCard);
    // });

    // node.forEach(() => {
    //   const newCard = articleMaker(node);
    //   document.body.appendChild(newCard);
    // });

    // tech.forEach(() => {
    //   const newCard = articleMaker(technology);
    //   document.body.appendChild(newCard);
    // });
  })
  .catch((err) => console.log(err));
