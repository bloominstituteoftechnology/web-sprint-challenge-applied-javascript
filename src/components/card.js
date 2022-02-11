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
  axios.get("http://localhost:5000/api/articles")
    .then((resp) => {
      console.log(resp.data.articles);
      const articleObj = resp.data.articles;
      const cssSelector = document.querySelector(selector);

      const javascript = articleObj.javascript;
      const bootstrap = articleObj.bootstrap;
      const technology = articleObj.technology;
      const jquery = articleObj.jquery;
      const node = articleObj.node;

      javascript.forEach((article) => {
        cssSelector.appendChild(Card(article));
      });

      bootstrap.forEach((article) => {
        cssSelector.appendChild(Card(article));
      });

      technology.forEach((article) => {
        cssSelector.appendChild(Card(article));
      });

      jquery.forEach((article) => {
        cssSelector.appendChild(Card(article));
      });

      node.forEach((article) => {
        cssSelector.appendChild(Card(article));
      });
    })

    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
