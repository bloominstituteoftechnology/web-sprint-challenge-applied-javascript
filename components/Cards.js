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


    function newcards(cards){

            const carddiv = document.createElement('div')
            const headlinediv = document.createElement('div')
            const authordiv = document.createElement('div')
            const imgcontainer =document.createElement('div')
            const image = document.createElement('img')
            const span = document.createElement('span')


            carddiv.classList.add('card')
            headlinediv.classList.add('headline')
            authordiv.classList.add('author')
            imgcontainer.classList.add('img-container')

            carddiv.append(headlinediv, authordiv, imgcontainer, image, span)
           
            carddiv.textContent = cards
            headlinediv.textContent = cards
            authordiv.textContent =cards
            imgcontainer.textContent =cards
            image.src = cards
            span.textContent =cards

    //     image.src =
        return carddiv;
    }
    axios.get("https:lambda-times-backend.herokuapp.com/articles")
    .then(Response => {
        console.log(Response);
    })
