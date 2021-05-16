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

import axios from "axios";

  
const Card = (article) => {
  let url = axios.get(`https://lambda-times-api.herokuapp.com/articles`)
   url.then(res=>{
     console.log("===============", res.data.articles)
   })
   .catch(err=>{
     console.log("errowerer==========", err)
   })
  let card = document.createElement("div");
      card.classList.add("card");
  let headline = document.createElement("div")
      headline.classList.add("headline")
      headline.textContent= `${article.headline}`;
      card.appendChild(headline);
  let divAuthor = document.createElement("div")
      divAuthor.classList.add("author");
      card.appendChild(divAuthor)
  let imgContainer = document.createElement("div");
      imgContainer.classList.add("img-container")
      divAuthor.appendChild(imgContainer)
  let img = document.createElement("img");
      img.setAttribute("src", `${article.authorPhoto}`);
      imgContainer.appendChild(img)
  let span = document.createElement("span");
       span.textContent = `${article.authorName}`;
       divAuthor.appendChild(span);
      card.addEventListener("click", (e=>{
        e.preventDefault();
        let url = axios.get(`https://lambda-times-api.herokuapp.com/articles`)
         url.then(res=>{
           console.log("===============", res.data.articles)
          })
   .catch(err=>{
     console.log("errowerer==========", err)
       })
       
      
      }))
     
  return card;
}
// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  
  const cardAppender = (selector) => {
    const cta = document.querySelector(selector);
    axios
      .get("https://lambda-times-api.herokuapp.com/articles")
      .then(item => {
        const articles = item.data.articles;
        for(const article in articles){            // for in loop
          articles[article].forEach(i => cta.appendChild(Card(i)))
        }
          })
      .catch(err => console.log(err))
  
  
}
export { Card, cardAppender }
