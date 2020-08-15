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

// adding my get request and iterators for the Articles

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=>{
    Object.keys(response.data.articles).forEach(subject=>{
        response.data.articles[subject].forEach(attribute=>{
            document.querySelector('.cards-container').append(cardsMaker(attribute));
        console.log(attribute);
        });
    });
})
.catch(error=>{console.log(error);
});

// creating elements and adding to the DOM

function cardsMaker(data){
    const divCardMaker=
        document.createElement('div');
    const divHeadlineMaker=
        document.createElement('div');
    const divAuthorMaker=
        document.createElement('div');
    const divImgMaker=
        document.createElement('div');
    const imgMaker=
        document.createElement('img');
    const spanMaker=
        document.createElement('span');

        divCardMaker.append(divHeadlineMaker);
        divCardMaker.append(divAuthorMaker);
        divAuthorMaker.append(divImgMaker);
        divAuthorMaker.append(spanMaker);
        divImgMaker.append(imgMaker);
        divCardMaker.classList.add('card');
        divHeadlineMaker.classList.add('headline');
        divAuthorMaker.classList.add('author');
        divImgMaker.classList.add('img-container');
        divHeadlineMaker.textContent=data.headline;
        imgMaker.src=data.authorPhoto;
        spanMaker.textContent=data.authorName;
        
        console.log (data);
        return divCardMaker;
    };       