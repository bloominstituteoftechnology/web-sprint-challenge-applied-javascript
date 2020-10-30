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
const cardsCarrier = document.querySelector(".cards-container")
axios
.get("https://lambda-times-api.herokuapp.com/articles")
.then(res => 
    {
        const authorData = res.data.articles
        for(let value in authorData) {
            authorData[value].forEach((item) => {
                let mainData = CardMaker(item)
                cardsCarrier.appendChild(mainData)
            })
        }
    })

.catch(err => {
    console.log("damnit")
})
function CardMaker(obj) {
    //Creating the elements
    const cardHolder = document.createElement("div")
    const headLine = document.createElement("div")
    const author = document.createElement("div")
    const imgHolder = document.createElement("div")
    //img is appended to img holder
    const img = document.createElement("img")
    const authorName = document.createElement("span")

    //Classes
    cardHolder.classList.add("card")
    headLine.classList.add("headline")
    author.classList.add("author")
    imgHolder.classList.add("img-container")

    //Hierarchy 
    cardHolder.appendChild(headLine)
    cardHolder.appendChild(author)
    author.appendChild(imgHolder)
    imgHolder.appendChild(img)
    author.appendChild(authorName)

    // //Text Content
    headLine.textContent = obj.headline;
    img.src = obj.authorPhoto;
    authorName.textContent = obj.authorName;

    //Interactivity 
    cardHolder.addEventListener('click', () => {
        console.log(headLine.textContent)
    })

    return cardHolder;


}