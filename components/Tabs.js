import axios from 'axios'

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


const titleCont = document.querySelector('.tile')

function topics (data){

   const tab = document.createElement('div')

   tab.classList.add('tab')

    data.forEach( item => {
        tab.textcontent = item
    } )
    

}

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res => {
    const tabs = Object.values(res.data)
    const tabs2 = [].concat.apply([], tabs)
    tabs2.map(data => {
        titleCont.appendChild(topics(tabs2))
    })
    
    

}).catch(err => {
    console.log(err)
})