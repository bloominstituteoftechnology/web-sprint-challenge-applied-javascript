import axios from "axios";

const Card = (article) => {
  const cardDiv = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const authorInfo = document.createElement("div");
  const photoCont = document.createElement("div");
  const photo = document.createElement("img");
  const name = document.createElement("span");

  cardDiv.classList.add("card");
  cardHeadline.classList.add("headline");
  authorInfo.classList.add("author");
  photoCont.classList.add("img-container");

  cardHeadline.textContent = article.headline;
  name.textContent = `By ${article.authorName}`;

  photo.src = article.authorPhoto;

  cardDiv.appendChild(cardHeadline);
  cardDiv.appendChild(authorInfo);
  authorInfo.appendChild(photoCont);
  photoCont.appendChild(photo);
  authorInfo.appendChild(name);

  cardDiv.addEventListener("click", () => {
    console.log(cardHeadline);
  });

  return cardDiv;
};

const cardAppender = (selector) => {
  axios
    .get("http://localhost:5000/api/articles")
    .then((resp) => {
      console.log(resp.data.articles);
      const articleObj = resp.data.articles
      const articleKeys = Object.values(resp.data.articles)
      const cssSelector = document.querySelector(selector)
      console.log(articleKeys)

      const javascript = articleObj.javascript
      const bootstrap = articleObj.bootstrap
      const technology = articleObj.technology
      const jquery = articleObj.jquery
      const node = articleObj.node

      console.log(javascript)

      javascript.forEach(article => {
        cssSelector.appendChild(Card(article))
      })

      bootstrap.forEach(article => {
        cssSelector.appendChild(Card(article))
      })

      technology.forEach(article => {
        cssSelector.appendChild(Card(article))
      })

      jquery.forEach(article => {
        cssSelector.appendChild(Card(article))
      })

      node.forEach(article => {
        cssSelector.appendChild(Card(article))
      })
      
      
      // articleKeys.forEach((key, index) => {
        
      //   for (let i = 0; i < articleKeys.length; i++){
      //     cssSelector.appendChild(Card(articleObj[articleKeys[index]][i]))
      //     console.log(articleObj[articleKeys[index]][i])
      //   }
        
      // })
      
     
       
        
      })


      .catch(err => {
        console.log(err)
      })
      
    };
    

    // })
    // TASK 6
    // ---------------------
    // Implement this function that takes a css selector as its only argument.
    // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
    // However, the articles do not come organized in a single, neat array. Inspect the response closely!
    // Create a card from each and every article object in the response, using the Card component.
    // Append each card to the element in the DOM that matches the selector passed to the function.
    //
    

export { Card, cardAppender };
