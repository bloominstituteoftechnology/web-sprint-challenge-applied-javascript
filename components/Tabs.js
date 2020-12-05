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

axios.get('https://lambda-times-api.herokuapp.com/topics') //get request which resolves a promise
.then(response => { //handling a successful response
    response.data.topics.forEach(topic => { //iterates over the topics array within the data object
        const newTab = document.createElement('div') //creates the div for the topic tab
        newTab.classList.add('tab')  //giving each tab the class of "tab"
        newTab.innerHTML = topic //add the content of topic to the tab
        const topicSection = document.querySelector('.topics') //selecting the div where the tabs will go
        topicSection.appendChild(newTab) //appending to the previously mentioned div
    })
})
.catch(error =>{ //handling an unsuccessful response
    console.log(error)
})
