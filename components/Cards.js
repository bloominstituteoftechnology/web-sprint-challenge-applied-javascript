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

const request = axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    console.log('success')
    console.log(response.data.articles)
    article(response.data.articles)
})
.catch(err =>{
    console.log('reject')
    console.log('ERROR:', err)
})

console.log('pending', request)




function article (data){


    console.log(data)

    //Instantiate 
    const card = document.createElement('div')
    const hLine = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')


    //Structure
    card.appendChild(hLine)
    card.appendChild(author)

    author.appendChild(imgCont)
    author.appendChild(span)

    imgCont.appendChild(img)
    
    console.log(card)
    
    
    //Assign Classes
    card.classList.add('card')
    hLine.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')

    // img.src = `${authorPhoto}`

    //Text Content
    // hLine.textContent = `${headline}`
    // author.textContent = `${authorName}`
    
    //append to the DOM
    const mDiv = document.querySelector('.cards-container')

    mDiv.appendChild(card)
}

// article()