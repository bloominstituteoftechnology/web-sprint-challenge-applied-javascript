import axios from "axios";



axios.get("https://lambda-times-api.herokuapp.com/articles")
.then(res => {
  const articles = res.data.articles;
  const activeTab = document.querySelector("div.active-tab");
  console.log(activeTab);
  if (activeTab === null) {
    for (const articlesArr of Object.values(articles)) {
      articlesArr.forEach(article => {
        document.querySelector("div.cards-container").appendChild(makeArticle(article));
      })
    }
  } 
  else {
    for (const [topic, articlesArr] of Object.entries(articles)) {
      if (topic === activeTab.textContent) {
        articlesArr.forEach(article => {
          document.querySelector("div.cards-container").appendChild(makeArticle(article))
        });
      }
    }
  }
})
.catch(e => {
  document.querySelector("div.errors-container").appendChild(makeError(e));
});

function makeArticle(article) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgAuthor = document.createElement("img");
  const spanAuthor = document.createElement("span");
  
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(imgAuthor);
  author.appendChild(spanAuthor);

  
  card.classList.add("card");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  imgAuthor.setAttribute("src", article.authorPhoto);
  spanAuthor.textContent = `By ${article.authorName}`;

  card.addEventListener("click", () => {
    console.log(headline.innerText);
  })
  
  return card;
  
}

const makeError = (e) => {
  const errorDiv = document.createElement("div");
  const errMsg = document.createElement("p1");
  errMsg.textContent = e;
  errorDiv.appendChild(errMsg);

  return errorDiv;
}
