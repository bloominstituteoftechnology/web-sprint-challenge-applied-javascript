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

function cardMaker (arr){
    //select the "appended to" super parent element from HTML
    const cardSuperParent = document.querySelector('.cards-container');
    
    //create the elements
    const cardParentDiv = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const articleAuthorDiv = document.createElement('div');
    const authorImgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorNameSpan = document.createElement('span');
    //give elements classes
    cardParentDiv.classList.add('card')
    articleHeadline.classList.add('headline')
    articleAuthorDiv.classList.add('author')
    authorImgContainer.classList.add('img-container')
    //add text content when relevant and other attributes
    articleHeadline.textContent = arr.headline
    authorNameSpan.textContent = arr.authorName
    authorImg.setAttribute('src', arr.authorPhoto)
    //append children to parent (the one appended to super parent)
    cardSuperParent.appendChild(cardParentDiv);
    cardParentDiv.appendChild(articleHeadline);
    cardParentDiv.appendChild(articleAuthorDiv);
    articleAuthorDiv.appendChild(authorImgContainer);
    articleAuthorDiv.appendChild(authorNameSpan);
    authorImgContainer.appendChild(authorImg);
    
    cardParentDiv.addEventListener('click', function (event){
        console.log(arr.headline);
    })
    // return cardParentDiv
    return cardSuperParent;
}   



axios
    .get ('https://lambda-times-api.herokuapp.com/articles')
    .then((res)=> {
        console.log(res);
        //Bring the data in a consumable way i.e. an array to loop over
        const dataObj = res.data.articles
        console.log(dataObj);
        let stagingArr = []
        let artcilesArr = []
        for (const property in dataObj){
            stagingArr.push(dataObj[property])
            }
        stagingArr.forEach(function(topic){
            topic.forEach(article=>{
                artcilesArr.push(article)
            })
        })        
        //Run the card maker function on each article
        artcilesArr.forEach(article => {
            cardMaker(article);
            // 
        }
        );
       
    });