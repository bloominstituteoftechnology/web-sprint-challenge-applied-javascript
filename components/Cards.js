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


const articleMaker = (array, titles) => {
    array.forEach(obj => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = obj[titles] ['headline']
        cardDiv.appendChild(headlineDiv)
    
        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        cardDiv.appendChild(authorDiv);
    
        const imgContainerDiv = document.createElement('div');
        imgContainerDiv.classList.add('img-container');
        authorDiv.appendChild(imgContainerDiv);
    
        const authorImg = document.createElement('img');
        authorImg.style.src = obj[titles]['authorPhoto']
        imgContainerDiv.appendChild(authorImg);
    
        const authorSpan = document.createElement('span');
        authorSpan.textContent = `By ${obj[titles]['authorName']}`
        authorDiv.appendChild(authorImg);
        
        const articleAttach = document.querySelector('.cards-container')
        articleAttach.appendChild(cardDiv)
        console.log(articleAttach);
        return articleAttach;
    })
}


axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
        .then( response => {
            const articleTopic = response.data["articles"];
            console.log(articleTopic);
            const artValues = Object.values(articleTopic);
            console.log(artValues[2]);
            artValues.forEach( element => {
                const artValuesHeadlineArray = Object.values(artValues);
                console.log(artValues)
                console.log(artValuesHeadlineArray);
                console.log(artValuesHeadlineArray[0])

                const headlinesArray = Object.values(artValuesHeadlineArray);
                console.log(headlinesArray);

                // indivArticles = artValuesHeadlineArray[element];
                // indivArticles.forEach(headlines => {
                //    const indivHeadlines = indivArticles[headlines];
                //     return indivHeadlines;
                // })
            })
            const artKeys = Object.keys(articleTopic);
            console.log(artKeys);
            console.log('success');
            console.log(response);
        })
        .catch( error => {
            console.log('error');
        })















// const articleMaker = (array) => {
//     array.forEach(obj => {
//         const cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');
        
//         const headlineDiv = document.createElement('div');
//         headlineDiv.classList.add('headline');
//         headlineDiv.textContent = obj['headline']
//         cardDiv.appendChild(headlineDiv)
    
//         const authorDiv = document.createElement('div');
//         authorDiv.classList.add('author');
//         cardDiv.appendChild(authorDiv);
    
//         const imgContainerDiv = document.createElement('div');
//         imgContainerDiv.classList.add('img-container');
//         authorDiv.appendChild(imgContainerDiv);
    
//         const authorImg = document.createElement('img');
//         authorImg.style.src = obj['authorPhoto']
//         imgContainerDiv.appendChild(authorImg);
    
//         const authorSpan = document.createElement('span');
//         authorSpan.textContent = `By ${obj['authorName']}`
//         authorDiv.appendChild(authorImg);
        
//         const articleAttach = document.querySelector('.cards-container')
//         articleAttach.appendChild(cardDiv)
//         console.log(articleAttach);
//         return articleAttach;
//     })

// }



// const InfiniteArticles = () => {
//     axios
//         .get('https://lambda-times-backend.herokuapp.com/articles')
//             .then( response => {
//                 console.log(response);
//                 const articleTopic = response.data["articles"];
//                 console.log(articleTopic);
//                 articleTopic.forEach(element => {
//                     const indivTopics = response.data["articles"][element];
//                     console.log(indivTopics);
//                     indivTopics.forEach(thing => {
//                         const topicSections = response.data["articles"][element][thing];
//                         return topicSections;
//                     })
//                     return topicSections;
//                 })
//                 articleMaker(topicSections);
//             })
//             .catch( error => {
//                 console.log('error')
//                 return error;
//             })
// }

// InfiniteArticles()




// topicSections.forEach(obj => {
//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('card');
//     console.log(cardDiv);
    
//     const headlineDiv = document.createElement('div');
//     headlineDiv.classList.add('headline');
//     headlineDiv.textContent = obj['headline']
//     cardDiv.appendChild(headlineDiv)

//     const authorDiv = document.createElement('div');
//     authorDiv.classList.add('author');
//     cardDiv.appendChild(authorDiv);

//     const imgContainerDiv = document.createElement('div');
//     imgContainerDiv.classList.add('img-container');
//     authorDiv.appendChild(imgContainerDiv);

//     const authorImg = document.createElement('img');
//     authorImg.style.src = obj['authorPhoto']
//     imgContainerDiv.appendChild(authorImg);

//     const authorSpan = document.createElement('span');
//     authorSpan.textContent = `By ${obj['authorName']}`
//     authorDiv.appendChild(authorImg);

//     console.log(cardDiv);
// })

// // const articleInfo = response.data["articles"]["javascript"];
// // articleInfo.forEach(element => {
    
// // });




// // const articleMaker = (obj) => {
// //     const cardDiv = document.createElement('div');
// //     cardDiv.classList.add('card');
    
//     const headlineDiv = document.createElement('div');
//     headlineDiv.classList.add('headline');
//     headlineDiv.textContent = obj['headline']
//     cardDiv.appendChild(headlineDiv)

//     const authorDiv = document.createElement('div');
//     authorDiv.classList.add('author');
//     cardDiv.appendChild(authorDiv);

//     const imgContainerDiv = document.createElement('div');
//     imgContainerDiv.classList.add('img-container');
//     authorDiv.appendChild(imgContainerDiv);

//     const authorImg = document.createElement('img');
//     authorImg.style.src = obj['authorPhoto']
//     imgContainerDiv.appendChild(authorImg);

//     const authorSpan = document.createElement('span');
//     authorSpan.textContent = `By ${obj['authorName']}`
//     authorDiv.appendChild(authorImg);

//     console.log(cardDiv);
//     return cardDiv;
// }


// axios
//     .get('https://lambda-times-backend.herokuapp.com/articles')
//         .then( response => {
//             console.log(response);
//             return response;
//         })
//         .catch( error => {
//             console.log('error')
//             return error;
//         })


// const InfiniteArticles = () => {


    
//     const articleInfo = response.data["articles"]["javascript"];
//     articleInfo.forEach(element => {
        
//     });
// }


// axios
//     .get('https://lambda-times-backend.herokuapp.com/articles')
//         .then( response => {
//             const articleTopic = response.data["articles"];
//             console.log(articleTopic);
//             const artValues = Object.values(articleTopic);
//             console.log(artValues);
//             const artKeys = Object.keys(articleTopic);
//             console.log(artKeys);
//             console.log('success');
//             console.log(response);
//         })
//         .catch( error => {
//             console.log('error');
//         })


// axios
//     .get('https://lambda-times-backend.herokuapp.com/articles')
//         .then( response => {
//             console.log('success');
//         })
//         .catch( error => {
//             console.log('error');
//         })