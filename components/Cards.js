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

// const div = document.querySelector('.cards-container')
// div.addEventListener('click', () => {
//     console.log()
// })
// axios.get('https://lambda-times-api.herokuapp.com/articles')
// .then((res) => {
//     const articles = res.data.articles.bootstrap;
//     console.log(articles);
//     articles.forEach((item) => {
//         const newArticle = makeArticles(item)
//         div.appendChild(newArticle)
        
//     })

// })
// .catch((err) => {
//     console.log(err)
// })

// axios.get('https://lambda-times-api.herokuapp.com/articles')
// .then((res) => {
//     const articles = res.data.articles.javascript;
//     console.log(articles);
//     articles.forEach((item) => {
//         const newArticle = makeArticles(item)
//         div.appendChild(newArticle)
//     })
// })
// .catch((err) => {
//     console.log(err)
// })

// axios.get('https://lambda-times-api.herokuapp.com/articles')
// .then((res) => {
//     const articles = res.data.articles.jquery;
//     console.log(articles);
//     articles.forEach((item) => {
//         const newArticle = makeArticles(item)
//         div.appendChild(newArticle)
//     })
// })
// .catch((err) => {
//     console.log(err)
// })

// axios.get('https://lambda-times-api.herokuapp.com/articles')
// .then((res) => {
//     const articles = res.data.articles.node;
//     console.log(articles);
//     articles.forEach((item) => {
//         const newArticle = makeArticles(item)
//         div.appendChild(newArticle)
//     })
// })
// .catch((err) => {
//     console.log(err)
// })

// axios.get('https://lambda-times-api.herokuapp.com/articles')
// .then((res) => {
//     const articles = res.data.articles.technology;
//     console.log(articles);
//     articles.forEach((item) => {
//         const newArticle = makeArticles(item)
//         div.appendChild(newArticle)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
// })


const entry = document.querySelector('.cards-container')
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
  //console.log(response.data.articles);
  for (let key in response.data.articles) {
    //console.log(key);
    for (let i = 0; i < response.data.articles[key].length; i++) {
      const newCard = makeArticles(response.data.articles[key][i]);
      const headLine = document.querySelector('.headline');
    //   console.log(response.data.articles[key][i]);
    // console.log(newCard)
      entry.appendChild(newCard);
        entry.addEventListener('click', () => {
            console.log(headLine);
        })
    }
  }
})

.catch(err => {
  console.log(err);
});


function makeArticles(obj){
const divCard = document.createElement('div');
const divHeadline = document.createElement('div');
const divAuthor = document.createElement('div');
const divImg = document.createElement('div');
const imgAuthor = document.createElement('img');
const span = document.createElement('span');

divCard.classList.add('card');
divHeadline.classList.add('headline');
divAuthor.classList.add('author');
divImg.classList.add('img-container');

imgAuthor.src = obj.authorPhoto;
span.textContent = obj.authorName;
divHeadline.textContent = obj.headline;

divImg.appendChild(span);
divImg.appendChild(imgAuthor);
divAuthor.appendChild(divImg);
divCard.appendChild(divHeadline);
divCard.appendChild(divAuthor);

return divCard
}
