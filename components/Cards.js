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
    .then(function (response) {

        // Get parent container
        const parent = document.querySelector('.cards-container')

        // ------
        // Dynamically create an array with all topic names for easier iteration
        // ------

        // Get all tabs
        let allTabs = document.querySelectorAll('.tab')
        allTabs = Array.from(allTabs)

        const allTopics = [];

        // Iterate through the tabs and add the name of each tab to the allTopics array
        for (let i = 0; i < allTabs.length; i++) {
            allTopics.push(allTabs[i].textContent)
        }

        // Iterate through all topics and make all the cards
        for (let i = 0; i < allTopics.length; i++) {
            makeCardByTopic(allTopics[i])
        }

        // Helper function: Takes a topic, then creates all cards for that topic and appends it to the parent.
        function makeCardByTopic(topic) {

            const allArticles = response['data']['articles'][topic]

            // Iterates through all the articles for current topics and adds it to the parent
            for (let i = 0; i < allArticles.length; i++) {
                const card = createCard(allArticles[i])
                parent.appendChild(card)
            }

        }

    })

    .catch(function (error) {
        console.log('error')
    })

// Creates a single card based on the object passed in with information, and returns the card
function createCard(info) {

    const parent = document.createElement('div')
    parent.className = 'card'

    const headline = document.createElement('div')
    headline.className = 'headline'
    headline.textContent = info.headline
    parent.appendChild(headline)

    const author = document.createElement('div')
    author.className = 'author'
    parent.appendChild(author)

    const imgContainer = document.createElement('div')
    imgContainer.className = 'img-container'
    author.appendChild(imgContainer)

    const img = document.createElement('img')
    img.src = info.authorPhoto
    imgContainer.appendChild(img)

    const name = document.createElement('span')
    name.textContent = `By: ${info.authorName}`
    author.appendChild(name)

    // Logs the headline when clicked
    parent.addEventListener('click', function () {
        console.log(info.headline)
    })

    return parent

}