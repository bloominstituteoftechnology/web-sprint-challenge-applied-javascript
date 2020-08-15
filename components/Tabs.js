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

// my get request Component


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response=>{
    // forEach to Iterate over the Topics

    response.data.topics.forEach(element => {
        const topicMaker=
         document.createElement('div');
             topicMaker.append('.topics');
             topicMaker.classList.add('tab');
             topicMaker.textContent=`${element}`;
         document.querySelector('.topics').append(topicMaker);
    });
})
.catch(error=>{
    console.log(error)
});
