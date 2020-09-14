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

axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((resp) =>{
    console.log('Also working!', resp)
})


function cardList(article){
    const divCard = document.createElement("div")
    divCard.classList.add("card")

    const divHeadLine = document.createElement("div")
    divHeadLine.classList.add("headline")
    divHeadLine.textContent = article.headLine;
    divCard.appendChild(divHeadLine)

    const divAuthor = document.createElement("div")
    divAuthor.classList.add("author")
    divCard.appendChild(divAuthor)

    const divImage = document.createElement("div")
    divImage.classList.add("img-container")
    divAuthor.appendChild(divImage)

    const images = document.createElement("img")
    images.src = article.authorPhoto;
    divImage.appendChild(images)

    const span = document.createElement("span")
    span.textContent = article.authorName;
    divAuthor.appendChild(span)

    return divCard
}

