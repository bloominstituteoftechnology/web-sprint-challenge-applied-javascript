import Axios from "axios";

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

const topics = document.querySelector('.topics')
Axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        const card = myCard(res.data)
        topics.appendChild(card)
    })
    .catch(error => {
    })
    function newTab(data) {
        const tab = document.createElement('div')
        const twoTab = document.createElement('div')
        const threeTab = document.createElement('div')
        const fourTab = document.createElement('div')
        const fiveTab = document.createElement('div')

        tab.textContent = data.bootstrap
        twoTab.textContent = data.javascript
        threeTab.textContent = data.jquery
        fourTab.textContent = data.node
        fiveTab.textContent = data.technology

        tab.classList.add('bootstrap')
        twoTab.classList.add('javascript')
        threeTab.classList.add('jquery')
        fourTab.classList.add('node')
        fiveTab.classList.add('technology')

        tab.appendChild(twoTab)
        twoTab.appendChild(threeTab)
        threeTab.appendChild(fourTab)
        fourTab.appendChild(fiveTab)

        tab.addEventListener('click', () => {
            tab.classList.toggle('bootstrap')
        })
        twoTab.addEventListener('click', () => {
            twoTab.classList.toggle('javascript')
        })
        threeTab.addEventListener('click', () => {
            threeTab.classList.toggle('jquery')
        })
        fourTab.addEventListener('click', () => {
            fourTab.classList.toggle('node')
        })
        fiveTab.addEventListener('click', () => {
            fiveTab.classList.toggle('technology')
        })





.then(res => {
    res.data.topics.forEach((item) => {
        const tabCreator.appendChild(tabMaker(item));
    })
})
.catch(err => {
    console.log('Something went wrong')
})
.finally(() => {
    console.log('Finally done')
})

const tabMaker = (topic) => {
    const tabs = document.createElement('div')
    tabs.classList.add('tabs')
    tabs.textContent = 'topic'

    return tabs;
}

const tabCreator = document.querySelector('.topics')
tabCreator.append(newTab)