const Card = (article) => {
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

  const grandParent = document.createElement("div");
  const parentOne = document.createElement("div");
  const parentTwo = document.createElement("div");
  const childOne = document.createElement("div");
  const ChildTwo = document.createElement("span");
  const kid = document.createElement("img");

  grandParent.appendChild(parentOne);
  grandParent.appendChild(parentTwo);
  parentTwo.appendChild(childOne);
  parentTwo.appendChild(ChildTwo);
  childOne.appendChild(kid);

  classList.add("card");
  classList.add("headline");
  classList.add("author");
  classList.add("img-container");
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
