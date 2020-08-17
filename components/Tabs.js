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


const topicArray = document.querySelector('.topics');

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        const topics = response.data.topics;
        topics.forEach(object => {
            newTab(object);
        })
    })

    .catch(error => {
        console.log('Response is not recieved', error);
    })

function newTab(obj) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = obj;
    topicArray.appendChild(tab);

}