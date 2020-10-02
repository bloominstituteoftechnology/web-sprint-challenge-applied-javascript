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
const data = axios.get('https://lambda-times-api.herokuapp.com/topics')

.then( response => {
    console.log(response)
})
.catch( error => {
    console.log(error)
})

const entryPoint2 = document.querySelector('.tabs')
function Tabs(){
    const js = document.createElement('javascript')
    const bs = document.createElement('bootstrap')
    const tech = document.createElement('technology')
    const jquery = document.createElement('jquery')
    const node = document.createElement('node.js')

    js.classList.add('tabs')
    bs.classList.add('tabs')
    tech.classList.add('tabs')
    jquery.classList.add('tabs')
    node.classList.add('tabs')

    return js

    
}
const topics = document.querySelector('.topics')
topics.appendChild(Tabs())

console.log(Tabs())