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
const topic = document.querySelector('.topics')

const topicsArray = [
    'javascript',
    'bootstrap',
    'technology',
    'jquery',
    'node.js'
]
topicsArray.forEach(callback =>{
axios.get(` https://lambda-times-api.herokuapp.com/topics`)
.then(res => {
    topic.appendChild(tabs(res.data))
})
.catch(e => {
    console.log(e)
})
})

function tabs(object){
    for(let i = 0; i <= 5; i++){
    const tab = document.createElement('div')

    tab.classList.add('tab')

    tab.textContent = `${object.topics[i]}`
    
    return tab
}
}
