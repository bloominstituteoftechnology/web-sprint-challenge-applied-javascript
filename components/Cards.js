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

const promise = axios.get('https://lambda-times-backend.herokuapp.com/articles')
console.log(promise)



function constructor(obj) {
    let divContainer = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')

    divContainer.classList.add('card')
    div2.classList.add('headline')
    div3.classList.add('author')
    div4.classList.add('img-container')

    div2.textContent = obj.headline
    img.src = obj.authorPhoto
    span.textContent = `By ${obj.authorName}`

    divContainer.addEventListener('click', e => {
        console.log(obj.headline)
    })
    divContainer.append(div2,div3)
    div3.append(div4,span)
    div4.append(img)

    return divContainer
    
}


const entryPoint = document.querySelector('.cards-container')

promise.then((response => {
    response.data.articles.bootstrap.forEach(i => {
        const article = constructor(i)
        entryPoint.appendChild(article)
        
    })
}))

promise.then((response => {
    response.data.articles.javascript.forEach(i => {
        const article = constructor(i)
        entryPoint.appendChild(article)
        
    })
}))

promise.then((response => {
    response.data.articles.jquery.forEach(i => {
        const article = constructor(i)
        entryPoint.appendChild(article)
        
    })
}))

promise.then((response => {
    response.data.articles.node.forEach(i => {
        const article = constructor(i)
        entryPoint.appendChild(article)
        
    })
}))

promise.then((response => {
    response.data.articles.technology.forEach(i => {
        const article = constructor(i)
        entryPoint.appendChild(article)
        
    })
}))







.catch((errorResponse) => {
    console.log('error!', errorResponse)
  })

