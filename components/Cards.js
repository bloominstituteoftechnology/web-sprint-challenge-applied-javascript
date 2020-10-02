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

    axios.get('https://lambda-times-api.herokuapp.com/topics')
        .then(res1 => {
            axios.get('https://lambda-times-api.herokuapp.com/articles')
                .then(res2 => {
                    for (let i = 0; i < res1.data.topics.length; i++) {
                        let myArticles = Object.values(res2.data.articles)
                        let myKeys = Object.keys(res2.data.articles)
                        for (let j = 0; j < myArticles[i].length; j++) {
                            let article = myArticles[i][j]
                            const card = document.createElement('div')
                            const headline = document.createElement('div')
                            const author = document.createElement('div')
                            const img = document.createElement('div')
                            const name = document.createElement('span')
                            card.classList.add('card')
                            card.classList.add(`${myKeys[i]}`)
                            headline.classList.add('headline')
                            img.classList.add('img-container')
                            author.classList.add('author')
                            author.appendChild(img)
                            author.appendChild(name)
                            card.appendChild(headline)
                            card.appendChild(author)
                            headline.textContent = `${article.headline}`
                            img.innerHTML = `<img src='${article.authorPhoto}' alt='author's photo' width='50' />`
                            name.innerHTML = `<span><strong>By: ${article.authorName}</strong></span>`
                            card.addEventListener('click', () => {
                                console.log(headline.textContent)
                            })
                            const entryPoint = document.querySelector('.cards-container')
                            entryPoint.appendChild(card)
                        }
                    }
                })
                .catch(err2 => {
                    console.log(err2)
                })
        })
        .catch(err1 => {
            console.log(err1)
        })



