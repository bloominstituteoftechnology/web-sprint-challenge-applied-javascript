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
function TabCreator(topic) {
    const newTab = document.createElement('div');

    newTab.classList.add('tab');

    newTab.textContent = topic;

    return newTab;
};

const topicsContainer = document.querySelector('.topics')

axios.all([axios.get('https://lambda-times-api.herokuapp.com/topics')])
    .then(axios.spread((res1) => {
        console.log('this is the response', res1)

        res1.data.topics.forEach((data) => {
            topicsContainer.append(TabCreator(data));
        });
    }))
    .catch((err) => {
        console.log('Here is the error', err)
    });