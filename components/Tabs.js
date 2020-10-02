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

const topics = document.querySelector('.topics');

//use axios.get to snag the promise object 
//Check the data out for structure

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(info => { //Iterate over data and build Dom elements 
        info.data.topics.forEach(item => {
            //create DOM elements for the tab and build them out 
            const topic = document.createElement('div');
            topic.classList.add('tab');
            topic.textContent = item;
             //Add Elements to DOM
            topics.append(topic);
        })
    })
    .catch(err => {
        console.log(err); 
        // debugger;
    })
    
    
    
   