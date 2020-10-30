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

//run query selector on topics parent container
const topics = document.querySelector('.topics');

//use axios to get object from api, run .forEach on object to create new tabs
axios
    .get ('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        response.data.topics.forEach(topic =>{
            topics.append(newTab(topic));
        });
    })
    .catch(error => {
        console.log(error);
    });


//new tab function to create tab divs
function newTab(input){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = input;
    return tab;
}