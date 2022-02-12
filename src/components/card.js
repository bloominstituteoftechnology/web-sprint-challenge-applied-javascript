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
      const object = resp.data.articles
      

      Object.keys(object).forEach(key => object[key].forEach(item => document.querySelector(selector).appendChild(Card(item))));

    })

    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
