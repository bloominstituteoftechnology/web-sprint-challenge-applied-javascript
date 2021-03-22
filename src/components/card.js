import axios from 'axios';
const Card = (article) => {

const card = document.createElement('div');
const headline = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');
const img = document.createElement('img');
const authorName = document.createElement('span');


card.classList.add("card")
headline.classList.add("headline");
author.classList.add("author");
imgContainer.classList.add("img-container");

card.appendChild(headline);
card.appendChild(author);
author.appendChild(imgContainer);
author.appendChild(authorName);
imgContainer.appendChild(img);

headline.textContent=article.headline;
authorName.textContent = `By ${article.authorName}`;
img.setAttribute('src', `${article.authorPhoto}`);

card.addEventListener('click', event => {
console.log(headline);
});

  return card;
}

const cardAppender = (selector) => {

const myArr = ["javascript", "bootstrap", "technology", "jquery","node"];
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(success => {
  console.log(success);
  myArr.forEach(topic => {
      success.data.articles[topic].forEach(el => {
      const newDiv = Card(el);
      document.querySelector(selector).appendChild(newDiv);
    });
    });
})
.catch(failure => {
    console.log(failure);
  });
  
}

export { Card, cardAppender }
