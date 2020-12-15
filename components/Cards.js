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

const array = ["javascript", "bootstrap", "technology", "jquery", "node"];

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then((success) => {
    console.log(success);
    array.forEach((topic) => {
        success.data.articles[topic].forEach((e) => {
            const div = cardMaker(e);
            document.querySelector('.cards-container').appendChild(div)
        });
    });
})
.catch((failure) => {
    console.log(failure);
});

function cardMaker(obj) {
    const divCard = document.createElement('div');
    divCard.classList.add("card");

    const divHeadline = document.createElement('div');
    divHeadline.classList.add('headline');
    divHeadline.textContent = obj.headline;
    divCard.appendChild(divHeadline);

    const divAuthor = document.createElement('div')
    divAuthor.classList.add("author")
    divCard.appendChild(divAuthor);

    const divImg = document.createElement('div');
    divImg.classList.add("img-container");
    divCard.appendChild(divImg);

    const authorImg = document.createElement('img');
    authorImg.setAttribute('src', obj.authorPhoto)
    divImg.appendChild(authorImg)
    

    const divSpan = document.createElement('span');
    divSpan.textContent = obj.authorName;
    divSpan.setAttribute('src', obj.authorName);
    divCard.appendChild(divSpan);

    divCard.addEventListener('click', (e) => {
        console.log(obj.headline)
    })

    divAuthor.append(divImg, divSpan);
    divCard.append(divHeadline, divAuthor);

    return divCard;
}

cardMaker();