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
 axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
     const articleData = response.data.articles; 
     Object.values(articleData).forEach((articles) => {
         articles.forEach((article) => {
             cardsHome.appendChild(articleMaker(article));
         })
     })
    //  console.log(response.data.articles);
 }).catch(error => {
     console.log('gotta catch \'em all ' + error); 
 }); 

const cardsHome = document.querySelector('.cards-container'); 
//testing testing 1,2,3 is this thing on? 
// console.log(cardsHome);

function articleMaker(object){
    // main card = top level parent 
    const articleCard = document.createElement('div'); 
    articleCard.classList.add('card'); 

    // headline 
    const articleHeadline = document.createElement('div'); 
    articleHeadline.classList.add('headline'); 
    articleHeadline.textContent = object.headline;
    articleCard.appendChild(articleHeadline); 

    // author information and image container and image src 
    // main card = second level parent 
    const authorBox = document.createElement('div'); 
    authorBox.classList.add('author'); 
    articleCard.appendChild(authorBox); 
    // sub card 
    const authorFrame = document.createElement('div');
    authorFrame.classList.add('img-container'); 
    const authorImg = document.createElement('img'); 
    authorImg.src = object.authorPhoto;
    // a frame holds an image, so append the img to the frame (second level parent)
    authorFrame.appendChild(authorImg);
    authorBox.appendChild(authorFrame); 

    // author's name span 
    const authorName = document.createElement('span'); 
    authorName.textContent = 'By ' + object.authorName; 
    authorFrame.appendChild(authorName); 
    
    // event listener 
    articleCard.addEventListener('click', () => {
        console.log(articleHeadline.textContent); 
    });

    // THY MUST RETURN 
    return articleCard; 
}