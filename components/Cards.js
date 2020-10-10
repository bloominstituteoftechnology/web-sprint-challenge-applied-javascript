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
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        const data = response.data;
        const cardDiv = document.querySelector('.card');
        data.card.forEach(function(topic) {
            const output = getRequest(topic);
            cardDiv.appendChild(output);

        })
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })

const cardsContainer = document.querySelector('.cards-container');

function getRequest(data) {

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.authorPhoto;
    const span = document.createElement('span');

    cardsContainer.appendChild(div);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(span);
    div3.appendChild(div4);
    div4.appendChild(img);

    div1.classList.add('card');
    div2.classList.add('headline');
    div3.classList.add('author');
    div4.classList.add('img-container');

    div2.textContent = `${data.headline}`;
    span.textContent = `${data.authorName}`;

    return div;
}