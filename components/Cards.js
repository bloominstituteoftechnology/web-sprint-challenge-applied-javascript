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
function articleMaker(obj){
        const card = document.createElement('div'); //Write a function 
        const headLine = document.createElement('div') // <div class="headline">{Headline of article}</div>
        const author = document.createElement('div');  //   <div class="author">
        const imgDiv = document.createElement('div'); //< class="img-container">
        const img = document.createElement('img');  //<img src={url of authors image} //
        const span = document.createElement('span'); //<span>By {author's name}</span>
        
        //setting class names
        card.classList.add('card');
        headLine.classList.add('headline');
        author.classList.add('author');
        imgDiv.classList.add('img-container');
        img.setAttribute('src',obj.authorPhoto); // img src
        
        span.textContent = obj.authorName;
        headLine.textContent = obj.headline;
        card.addEventListener('click', event => {
            console.log(obj.headline)
        })
   
        imgDiv.appendChild(img);
        author.append(imgDiv,span);
        card.append(headLine,author);
        
        return card;
    }
    const myArr = [
        "javascript",
        "bootstrap",
        "technology",
        "jquery",
        "node"
    ];
    axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(success => {
        console.log(success);
        myArr.forEach(topic => {
            success.data.articles[topic].forEach(el => {
            const newDiv = articleMaker(el);
            document.querySelector('.cards-container').appendChild(newDiv);
        });
        });
    })
    .catch(failure => {
        console.log(failure);
    });