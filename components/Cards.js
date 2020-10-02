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


const entryPoint3 = document.querySelector('.card')
function cardMaker(){
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('image-container')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgCont)
    imgCont.appendChild(img)
    author.appendChild(name)

    headline.textContent = 'Headline of Article'
    img.textContent = 'url of authors image'
    name.textContent= 'authors name'

    return card
}

const cardCont = document.querySelector('.card-container')
cardCont.append(cardMaker())

 axios.get('https://lambda-times-api.herokuapp.com/articles')
.then( response => {
    console.log(response.data)
    console.log(response.data.message);
    const info = Object.values(response.data.articles);
    const cards = document.querySelector('.cards-container');
    info.forEach( item => {
        item.forEach( element => {
            cards.appendChild(cardMaker(element))
        })
    })
})
.catch( error => {
    console.log(error)
})

const title = document.querySelector('.card')

function finalCard(event){
    title.addEventListener('click', '.card')
}

console.log(headline)