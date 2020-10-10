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


const topics = (topic) => {

    const topics = document.createElement('div');

    topics.classList.add('tab');

    topics.textContent = topic;

    return topics;

};

const topicTab = document.querySelector('.topics');

axios.get('https://lambda-times-api.herokuapp.com/topics')

    .then((successResponse) => {
        console.log('tabs', successResponse);
        successResponse.data.topics.forEach(url => {
            const newTopic = topics(url)
            topicTab.appendChild(newTopic);
        })   
    })

    .catch((errorResponse) => {
        console.log('error', errorResponse)
    });

    // const tabComponent = newTab();
    // const tabContainer = document.querySelector('.topics');

    // tabContainer.appendChild(tabComponent);