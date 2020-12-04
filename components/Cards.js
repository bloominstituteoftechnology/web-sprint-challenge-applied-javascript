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

const cardsContainer = document.querySelector(".cards-container")

axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((articleData) => {
        
        for (let i = 0; i < 3; i++) {
            articleMaker(articleData.data.articles.bootstrap[i])
        }

        for (let i = 0; i < 4; i++) {
            articleMaker(articleData.data.articles.javascript[i])
        }
        
        for (let i = 0; i < 3; i++) {
            articleMaker(articleData.data.articles.jquery[i])
        }

        for (let i = 0; i < 2; i++) {
            articleMaker(articleData.data.articles.node[i])
        }

        for (let i = 0; i < 3; i++) {
            articleMaker(articleData.data.articles.technology[i])
        }
    })

function articleMaker(object) {
    const card = document.createElement("div")
    card.classList.add("card")

        const headline = document.createElement("div")
        headline.classList.add("headline")
        headline.textContent = `${object.headline}`
        headline.addEventListener("click", function(event) {
            console.log(object.headline)
        })

        const author = document.createElement("div")
        author.classList.add("author")

            const imgContainer = document.createElement("div")
            imgContainer.classList.add("img-container")

                const img = document.createElement("img")
                img.src = `${object.authorPhoto}`

            const byLine = document.createElement("span")
            byLine.textContent = `By ${object.authorName}`

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(byLine)
    imgContainer.appendChild(img)

    return cardsContainer.appendChild(card)
}  

