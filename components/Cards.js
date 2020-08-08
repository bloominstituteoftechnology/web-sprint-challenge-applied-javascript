/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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
// Use your function to create a card for each of the articles, and append each card to the DOM.nn

    function newcards(article){

            const carddiv = document.createElement('div');
            const headlineOfArtDiv = document.createElement('div');
            const authordiv = document.createElement('div');
            const imgcontainer =document.createElement('div');
            const imageAuthor = document.createElement('img');
            const spanAuthorName = document.createElement('span');


            carddiv.classList.add('card')
            headlineOfArtDiv.classList.add('headline')
            authordiv.classList.add('author')
            imgcontainer.classList.add('img-container')

           
            carddiv.appendChild(headlineOfArtDiv);
            carddiv.appendChild(authordiv);
            authordiv.appendChild(imgcontainer)
            imgcontainer.appendChild(imageAuthor)
            authordiv.appendChild(spanAuthorName)

        
           
          
            headlineOfArtDiv.textContent = article.headline
  
            imageAuthor.src = article.authorPhoto
            spanAuthorName.textContent = article.authorName

            carddiv.addEventListener('click', ()=>{ 
              console.log(article.headline)
            })

    
        return carddiv;
    } 

    // const cardcomponent = newcards('cardsURL');
    // const cardsContainer = document.querySelector('.cards-container');
    // cardsContainer.appendChild(cardcomponent);
    // console.log(cardcomponent);

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
      .then((res) => {
        const cardsContainer = document.querySelector('.cards-container')

        const data = res.data.articles;
        articleTypes = [
          data.javascript,
          data.bootstrap,
          data.technology,
          data.jquery,
          data.node
        ]

        articleTypes.forEach(articles => {
          articles.forEach(article => {
            cardsContainer.append(
             newcards(article)
          
            )


            console.log(article)
            
          }
          )
        })
      })
      
      .catch(err => console.log(err)) 

      
















   