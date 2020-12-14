
import axios from 'axios'

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

axios.get('https://lambda-times-api.herokuapp.com/articles')
     

        .then(({data}) => {
            console.log(data)
          
            
            data.articles.bootstrap.forEach(item =>{
                 let ncard=cardCreator(item);
                document.querySelector('.cards-container').append(ncard);   
            })
            data.articles.javascript.forEach(item =>{
                let ncard=cardCreator(item);
                document.querySelector('.cards-container').append(ncard);   
            })
            data.articles.jquery.forEach(item =>{
                let ncard=cardCreator(item);
                document.querySelector('.cards-container').append(ncard);   
            })
            data.articles.node.forEach(item =>{
                let ncard=cardCreator(item);
                document.querySelector('.cards-container').append(ncard);   
            })
            data.articles.technology.forEach(item =>{
                let ncard=cardCreator(item);
                document.querySelector('.cards-container').append(ncard);   
            })
        
           
        })
        .catch(err => {
            console.log(err)
        })
        
        

        function cardCreator(info){
            

            let cardCreators = document.createElement('div');
            
            cardCreators.classList.add('card');

            let headLine=document.createElement('div');
            headLine.classList.add('headline');
            headLine.textContent=info.headline;

            


            let author=document.createElement('div');
            author.classList.add('author');


            let image=document.createElement('div');
            image.classList.add('img-container');


            let imgURL = document.createElement('img');
            imgURL.setAttribute('src',info.authorPhoto);

            let span =document.createElement('span');
            span.textContent=info.authorName;

            cardCreators.append(headLine)
            cardCreators.append(author)
            cardCreators.append(image)

            image.appendChild(imgURL)
            image.append(span)
                

            
            
           return cardCreators;

        } 


