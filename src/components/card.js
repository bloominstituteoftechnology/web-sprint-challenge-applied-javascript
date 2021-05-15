const Card = ({headline, authorPhoto, authorName}) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // create elements
  const card = document.createElement("div");
  const head = document.createElement("div");
  const author = document.createElement("div");
  const imgcontainer = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("span");
  // add style and classes:
  card.classList.add("card");
  head.classList.add("headline");
  author.classList.add("author");
  imgcontainer.classList.add("img-container");
  //add content
  head.textContent = headline;
  image.src = authorPhoto;
  name.textContent = authorName;
  // create structure
  card.appendChild(head);
  card.appendChild(author);
  author.appendChild(imgcontainer);
  imgcontainer.appendChild(image);
  author.appendChild(name);
  // add listener
  card.addEventListener("click", () => console.log(headline));
  // return element
  return card

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  // get the object
  const main = document.querySelector(selector);
  // get the data
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then(item => {
      const articles = item.data.articles;
      for(article in articles){
        articles[article].forEach(y => main.appendChild(Card(y)))
      }
        })
    .catch(err => console.log(err))
}

export { Card, cardAppender }
