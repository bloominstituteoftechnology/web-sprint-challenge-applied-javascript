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


const articleCards = axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
        const articles = res.data.articles;
        const javascript = res.data.articles.javascript;
        const bootstrap = res.data.articles.bootstrap;
        const technology = res.data.articles.technology;
        const jquery = res.data.articles.jquery;
        const node = res.data.articles.node;

        
        
        

        for (let index = 0; index < javascript.length; index++){
            const JScardDiv = document.createElement('div');
            JScardDiv.classList.add('card');
            const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('img');
        imgContainer.src = javascript[index].authorPhoto
        const nameSpan = document.createElement('span');
        nameSpan.textContent = javascript[index].authorName
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = javascript[index].headline;
           authorDiv.classList.add('author');
           imgContainer.classList.add('img-container')
            const Author = document.querySelector('.author')
            authorDiv.appendChild(imgContainer)
                authorDiv.appendChild(nameSpan)
                const Card = document.querySelector('.card')
                JScardDiv.appendChild(headlineDiv)
                JScardDiv.appendChild(authorDiv)
           const cardsContainer= document.querySelector('.cards-container')
            cardsContainer.appendChild(JScardDiv)
            
        }  
           
        
        
       

        for (let index = 0; index < bootstrap.length; index++){
            
            const BScardDiv = document.createElement('div');
            BScardDiv.classList.add('card');
            const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('img');
        const nameSpan = document.createElement('span');
        nameSpan.textContent = bootstrap[index].authorName
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = bootstrap[index].headline
           authorDiv.classList.add('author');
           imgContainer.classList.add('img-container');
           imgContainer.src = bootstrap[index].authorPhoto
            const Author = document.querySelector('.author')
            authorDiv.appendChild(imgContainer)
                authorDiv.appendChild(nameSpan)
                const Card = document.querySelector('.card')
                BScardDiv.appendChild(headlineDiv)
                BScardDiv.appendChild(authorDiv)
           const cardsContainer= document.querySelector('.cards-container')
            cardsContainer.appendChild(BScardDiv)
        }


        for (let index = 0; index < technology.length; index++){
            const TechcardDiv = document.createElement('div');
            TechcardDiv.classList.add('card');
            const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('img');
        const nameSpan = document.createElement('span');
        nameSpan.textContent = technology[index].authorName
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = technology[index].headline
           authorDiv.classList.add('author');
           imgContainer.classList.add('img-container');
           imgContainer.src = bootstrap[index].authorPhoto
           const Author = document.querySelector('.author')
            authorDiv.appendChild(imgContainer)
                authorDiv.appendChild(nameSpan)
                const Card = document.querySelector('.card')
                TechcardDiv.appendChild(headlineDiv)
                TechcardDiv.appendChild(authorDiv)
           const cardsContainer= document.querySelector('.cards-container')
            cardsContainer.appendChild(TechcardDiv)
        }


        for (let index = 0; index < jquery.length; index++){
            const JQcardDiv = document.createElement('div');
            JQcardDiv.classList.add('card');
            const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('img');
        const nameSpan = document.createElement('span');
        nameSpan.textContent = jquery[index].authorName
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = jquery[index].headline
           authorDiv.classList.add('author');
           imgContainer.classList.add('img-container');
           imgContainer.src = jquery[index].authorPhoto
           const Author = document.querySelector('.author')
           authorDiv.appendChild(imgContainer)
               authorDiv.appendChild(nameSpan)
               const Card = document.querySelector('.card')
               JQcardDiv.appendChild(headlineDiv)
               JQcardDiv.appendChild(authorDiv)
          const cardsContainer= document.querySelector('.cards-container')
           cardsContainer.appendChild(JQcardDiv)
        }



        for (let index = 0; index < node.length; index++){
            const NodecardDiv = document.createElement('div');
            NodecardDiv.classList.add('card');
            const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('img');
        const nameSpan = document.createElement('span');
        nameSpan.textContent = node[index].authorName
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = node[index].headline
           authorDiv.classList.add('author');
           imgContainer.classList.add('img-container');
           imgContainer.src = node[index].authorPhoto
           const Author = document.querySelector('.author')
           authorDiv.appendChild(imgContainer)
               authorDiv.appendChild(nameSpan)
               const Card = document.querySelector('.card')
               NodecardDiv.appendChild(headlineDiv)
               NodecardDiv.appendChild(authorDiv)
          const cardsContainer= document.querySelector('.cards-container')
           cardsContainer.appendChild(NodecardDiv)
           
        }
        

})


