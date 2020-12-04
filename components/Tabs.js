// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


import axios from 'axios'

const API_TOPICS = 'https://lambda-times-api.herokuapp.com/topics'

axios
    .get(API_TOPICS)
    .then((res) => {
        let topicsArray = res.data.topics

        topicsArray.forEach( (topic) => {
            tabMaker(topic)
        })
        // tabMaker(res.data.topics[0])
        // console.log(res.data.topics[0])
    })
    .catch((err) => {
        console.log(err)
    })

//Function that create the component tab

const tabMaker = (topic) => {

    // Model of the tab:
    // <div class="tab">topic here</div>

    //Creating HTML tag
    const tab = document.createElement("div")
    
    //Setting styles
    tab.classList.add("tab")

    //Setting content
    tab.textContent = topic

    const tabContainer = document.querySelector("div.topics")
    tabContainer.appendChild(tab)

    return tab
}