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

const { default: Axios } = require("axios");

// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const tabsEntryPoint = document.querySelector('.topics')

Axios.get('https://lambda-times-api.herokuapp.com/topics')
.then((res) =>{
    console.log(res.data.topics)

    // created array of topics
    const topics = res.data.topics;

    //looping through data
    topics.forEach((topic) =>{

        //created element
        const seperateTopic = document.createElement('div');

        // gave classname
        seperateTopic.classList.add('tab');

        //gave text content
        seperateTopic.textContent = topic;

        // append to Dom
        tabsEntryPoint.appendChild(seperateTopic);

    })

})
.catch((err) =>{
    console.log(err, 'error')
})