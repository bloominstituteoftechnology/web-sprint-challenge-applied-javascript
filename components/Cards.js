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
// Add a listener for click events so that when a user clicks on a card,
//  the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

class Article{
    // Article Construction
    constructor(url){
        this.arTopics = [];
       
        this.url = { 'url':url };
    }
    // Mutator Function for this.arTopics
    makeTopics(a){
        a.forEach((at,i) =>{
            this.arTopics[i] = at;
        });
    }
    // Accessor Function for this.url
    articleRe(){
        return this.url;
    }
    // Accessor function for this.arTopics
    reTop(){
        return this.arTopics;
    }

/// Created Each Article
     articleMaker(obj){
        // All elements
            const card = document.createElement('div');
            const headLine = document.createElement('div')
            const author = document.createElement('div');
            const imgD = document.createElement('div');
            const img = document.createElement('img');
            const span = document.createElement('span');
            
        //classes and properties
            card.classList.add('card');
            headLine.classList.add('headline');
            author.classList.add('author');
            imgD.classList.add('img-container');
            img.setAttribute('src',obj.authorPhoto);
            
        //Text content
            span.textContent = obj.authorName;
            headLine.textContent = obj.headline;
        // Click Event listener
            card.addEventListener('click', event => {
                console.log(obj.headline)
            })
        //Append the whole thing
            imgD.appendChild(img);
            author.append(imgD,span);
            card.append(headLine,author);
            
        //the Article
            return card;
        }
        
}// End Article Class



// Article Lambda URL Found as a api url no const let or var
let ARTICLES_URL = 'https://lambda-times-api.herokuapp.com/articles';
let art = new Article(ARTICLES_URL);
// The url string from the url article object
const apiURL = art.articleRe()['url'];
// Backup array of all topics if we can figure out how to get updated values of the topics in the object
let artTops = [];
// artTops = art.reTop();

axios.get(apiURL)
.then(resp => {
    // Live dynamic topic update
    let count = 0;
    for(let f in resp.data.articles){
        artTops[count] = f;
        ++count;
        console.log('inside the data'+f);
    } // Copying topics over to article object 
    art.makeTopics(artTops);

    let tabs = document.querySelectorAll('.tab');
    let tabClicked = '';
    
    
        tabs.forEach(tab =>{
            tab.addEventListener('click',(e)=>{
                let allCards = document.querySelectorAll('.cards-container');
        console.log(allCards);
         if(allCards[0].firstElementChild == null){
      
        
                tabClicked = tab.textContent;
                if(tabClicked === 'all'){
                    // Can you reuse the same object within itself over and over again? if not one day use artTops
        art.reTop().forEach(topic => {
            // Iterate each toipc while appending all articles to that topic
            resp.data.articles[topic].forEach(e => {
            let newD = art.articleMaker(e);
            // Append each new article div with the cards-container
            document.querySelector('.cards-container').appendChild(newD);
        });
        });
                } // End all 
                if(tabClicked === 'javascript'){
                    resp.data.articles['javascript'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
                if(tabClicked === 'bootstrap'){
                    resp.data.articles['bootstrap'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
    
                if(tabClicked === 'technology'){
                    resp.data.articles['technology'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
                if(tabClicked === 'jquery'){
                    resp.data.articles['jquery'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
                let dot = '';
                 dot = escape('.');
                console.log('s'+dot);
                let nodejs = "node"+dot+"js";
                // console.log(tabClicked);
                if(tabClicked === nodejs){
                    console.log(tabClicked);
                    resp.data.articles['node'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
            }else if(allCards[0].firstElementChild.classList.contains('card')){
                console.log('removed');
            let cards = document.querySelectorAll('.card');
            cards.forEach(card =>{
                card.remove('card')

                
                
            });
            
            tabClicked = tab.textContent;
                if(tabClicked === 'all'){
                    // Can you reuse the same object within itself over and over again? if not one day use artTops
        art.reTop().forEach(topic => {
            // Iterate each toipc while appending all articles to that topic
            resp.data.articles[topic].forEach(e => {
            let newD = art.articleMaker(e);
            // Append each new article div with the cards-container
            document.querySelector('.cards-container').appendChild(newD);
        });
        });
                } // End all 
                if(tabClicked === 'javascript'){
                    resp.data.articles['javascript'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
                if(tabClicked === 'bootstrap'){
                    resp.data.articles['bootstrap'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
    
                if(tabClicked === 'technology'){
                    resp.data.articles['technology'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
                if(tabClicked === 'jquery'){
                    resp.data.articles['jquery'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
                let dot = '';
                 dot = escape('.');
                console.log('s'+dot);
                let nodejs = "node"+dot+"js";
                // console.log(tabClicked);
                if(tabClicked === nodejs){
                    console.log(tabClicked);
                    resp.data.articles['node'].forEach(e => {
                        let newD = art.articleMaker(e);
                        // Append each new article div with the cards-container
                        document.querySelector('.cards-container').appendChild(newD);
                    });
                }
    
        }
            },false);
            
        });  // end foreach
    
    
})
.catch(failure => {
    console.log('Faild',failure);
});




