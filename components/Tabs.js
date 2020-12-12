// STEP 2: Create tabs
// -----------------------
//[x] Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
//[x] Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM

//Data --> topics is an array of 5

// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
//[x] NOTE: you do _not_ need to install axios as it's included in the HTML via script element


function createTab (topicString){
    const singleTabDiv = document.createElement('div');
    singleTabDiv.classList.add('tab');

    singleTabDiv.textContent = topicString;

    return singleTabDiv;

}

axios.get(`https://lambda-times-api.herokuapp.com/topics`)
.then(sucessResult =>{
    const topics = sucessResult.data.topics;
    
    topics.forEach(individualTopic =>{
        const tab = createTab(individualTopic);
        const tabContainer = document.querySelector('div.topics');
        
        tabContainer.appendChild(tab);
    });
});


////////////////////////////////////////////////////////////////////////////////////////////


