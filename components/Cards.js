// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
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



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    const data = response.data.articles;
    Object.values(data).forEach((articles) => {
        articles.forEach((articles) => {
            cards.appendChild(articleMaker(article));
        })
    })
})

.catch(error => {
    console.log('not today' + error);
});


const cards = document.querySelector('.cards-container')

function articleMaker (object){
    const divCard =  document.createElement('div');
    divCard.classList.add('card');

    const divHeadline = document.createElement('div');
    divHeadline.classList.add('headline');
    divHeadline.textContent = object.divHeadline;
    divCard.appendChild(divHeadline);

    const box = document.createElement('div');
    box.classList.add('author');
    articleCard.appendChild(box);

    const frame = document.createElement('div');
    frame.classList.add('img-conatiner');

    const image = document.createElement('img');
    image.src = object.authorPhoto;
    frame.appendChild(image);
    box.appendChild(frame);

    const name = document.createElement('span');
    name.textContent = 'Then' + object.authorName;
    frame.appendChild(name);

    articleCard.addEventListener('click', () => {
        console.log(divHeadline.textContent);
    });


    return divCard;
    

}