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

const cd = document.querySelector(".cards-container")
console.log(cd)
const result = axios.get("https://lambda-times-api.herokuapp.com/articles")
.then(res => {
    cardMaker(res.data.articles.javascript)
    cardMaker(res.data.articles.bootstrap)
    cardMaker(res.data.articles.technology)
    cardMaker(res.data.articles.jquery)
    cardMaker(res.data.articles.node)
})
.catch(err => console.log(err))

function cardMaker( obj ) {
    // iterate obj in a for each loop
    const arr = Array.from(obj)

    arr.forEach((elem) => {
        
        const main = document.createElement("div");
        const head = document.createElement("div");
        const auth = document.createElement("div");
        const imgCon = document.createElement("div");
        const image = document.createElement("img");
        const sp = document.createElement("span");
    
        head.textContent = `${elem.headline}`
        sp.textContent = `${elem.authorName}`
        image.src = `${elem.authorPhoto}`
        
        main.classList.add("card");
        head.classList.add("headline");
        auth.classList.add("author");
        imgCon.classList.add("img-container");

        main.appendChild(head);
        main.appendChild(auth);
        auth.appendChild(imgCon);
        imgCon.appendChild(image);
        auth.appendChild(sp);
        console.log(main);

        main.addEventListener("click", (event) => {
            console.log(`${elem.headline}`)
        })

        return cd.appendChild(main)
    })
}