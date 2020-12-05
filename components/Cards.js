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

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        
        
        
        // how to do all topics at once?

        res.data.articles.javascript.forEach(article => {
            const div = document.createElement('div');
            const divHeadline = document.createElement('div');
            const divAuthor = document.createElement('div');
            const divImg = document.createElement('div');
            const image = document.createElement('img');
            const span = document.createElement('span');

            div.classList.add('card');
            divHeadline.classList.add('headline');
            divAuthor.classList.add('img-container');

            divHeadline.textContent = article.headline;
            image.src = article.authorPhoto;
            span.textContent = article.authorName;

            div.appendChild(divHeadline);
            div.appendChild(divAuthor);
            divAuthor.appendChild(divImg);
            divImg.appendChild(image);
            divAuthor.appendChild(span);

            cardsContainer.append(div);
        })

        res.data.articles.bootstrap.forEach(article => {
            const div = document.createElement('div');
            const divHeadline = document.createElement('div');
            const divAuthor = document.createElement('div');
            const divImg = document.createElement('div');
            const image = document.createElement('img');
            const span = document.createElement('span');

            div.classList.add('card');
            divHeadline.classList.add('headline');
            divAuthor.classList.add('img-container');
            
            

            divHeadline.textContent = article.headline;
            image.src = article.authorPhoto;
            span.textContent = article.authorName;

            div.appendChild(divHeadline);
            div.appendChild(divAuthor);
            divAuthor.appendChild(divImg);
            divImg.appendChild(image);
            divAuthor.appendChild(span);

            cardsContainer.append(div);
        })

        res.data.articles.technology.forEach(article => {
            const div = document.createElement('div');
            const divHeadline = document.createElement('div');
            const divAuthor = document.createElement('div');
            const divImg = document.createElement('div');
            const image = document.createElement('img');
            const span = document.createElement('span');

            div.classList.add('card');
            divHeadline.classList.add('headline');
            divAuthor.classList.add('img-container');
            
            divHeadline.textContent = article.headline;
            image.src = article.authorPhoto;
            span.textContent = article.authorName;

            div.appendChild(divHeadline);
            div.appendChild(divAuthor);
            divAuthor.appendChild(divImg);
            divImg.appendChild(image);
            divAuthor.appendChild(span);

            cardsContainer.append(div);
        })

        res.data.articles.jquery.forEach(article => {
            const div = document.createElement('div');
            const divHeadline = document.createElement('div');
            const divAuthor = document.createElement('div');
            const divImg = document.createElement('div');
            const image = document.createElement('img');
            const span = document.createElement('span');

            div.classList.add('card');
            divHeadline.classList.add('headline');
            divAuthor.classList.add('img-container');
            
            divHeadline.textContent = article.headline;
            image.src = article.authorPhoto;
            span.textContent = article.authorName;

            div.appendChild(divHeadline);
            div.appendChild(divAuthor);
            divAuthor.appendChild(divImg);
            divImg.appendChild(image);
            divAuthor.appendChild(span);

            cardsContainer.append(div);
        })

        
    })
    .catch(err => {
        console.log('you have an error!')
    })