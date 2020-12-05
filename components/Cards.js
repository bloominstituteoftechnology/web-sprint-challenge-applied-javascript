// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address:
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
 function articleMaker (obj){
 cardContainer = document.createElement("div");
 headlineContainer = document.createElement("div");
 authorContainer = document.createElement("div");
 imageContainer = document.createElement("div");
 image = document.createElement("img");
 authorSpan = document.createElement("span");

 cardContainer.classList.add("card");
 headlineContainer.classList.add("headline");
 authorContainer.classList.add("author");
 imageContainer.classList.add("img-container");

  headlineContainer.textContent = obj.headline;
  authorSpan.textContent = obj.authorName;
  image.src = obj.authorPhoto

cardContainer.appendChild(headlineContainer);
cardContainer.appendChild(authorContainer);
authorContainer.appendChild(authorSpan);
authorContainer.appendChild(imageContainer);
imageContainer.appendChild(image);


headlineContainer.addEventListener('click', (e) => {
    console.log(element)
  })








  
return cardContainer

 }
//end of function





let cards =document.querySelector(".cards-container")


axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then((res ) =>{
        // console.log(res)
        const javascript = res.data.articles.javascript
        const bootstrap =res.data.articles.bootstrap
        const technology = res.data.articles.technology
        const jquery = res.data.articles.jquery
        const node = res.data.articles.node
   
        bootstrap.forEach(element => {
            const headline = element.headline
            const src = element.authorPhoto
            const author = element.authorName

            const bootstrapCard = articleMaker({headline,src,author})

            cards.appendChild(bootstrapCard)
            
        });   
        
        
        technology.forEach(element => {
            const headline = element.headline
            const src = element.authorPhoto
            const author = element.authorName

            const technologyCard = articleMaker({headline,src,author})

            cards.appendChild(technologyCard)

    });

         node.forEach(element => {
        const headline = element.headline
        const src = element.authorPhoto
        const author = element.authorName

        const nodeCard = articleMaker({headline,src,author})

        cards.appendChild(nodeCard)

});
        
        jquery.forEach(element => {
    const headline = element.headline
    const src = element.authorPhoto
    const author = element.authorName

    const jqueryCard = articleMaker({headline,src,author})

    cards.appendChild(jqueryCard)

} );

});
    

    //     .catch((error)=>{
    //   console.log(error)
    // });
    
              
    
        
                                                  
         
 
//  console.log(bootStrapArray)
//  bootStrapArray.foreach(item =>{
//  const bootstrapNewCard = articleMaker(item)
 





// .get( ' https://lambda-times-api.herokuapp.com/articles')
//          .then(res =>{
//           const recieve = res.data.articles.javascript
//             console.log(recieve)

//             recieve.forEach(element => {
//             const javascriptCard = articleMaker(element)

                
//         });
//             const bootstrap = res.data.articles.bootstrap
//             bootstrap.forEach(element => {
//             const bootstrapCard =  articleMaker(element)
        
           
         
//         });  
           
//             const technology = res.data.articles.technology
//             technology.forEach(element =>{
//                 const technologyCard = articleMaker(element)
//              })
//             const jquery = res.data.articles.jquery
//             jquery.forEach(element =>{
//             const

//             })

            
//         })
//           .catch((err) => {
          
//             console.log(err);
//           });







