import axios from 'axios';

//axios.get('https://lambda-times-api.herokuapp.com/topics')
//    .then(data => {
//    console.log(data);
//})
//    .catch(err => console.log(err));

// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).

const Tabs = ({topics}) => {

    const topic = document.createElement('div');
    topic.classList.add('topics');

    topics.forEach(e => {
        const newTab = document.createElement('div')
        newTab.classList.add('tab')
        newTab.textContent = e;
        topic.appendChild(newTab);
        return newTab
    })    
    return topic;
}



const tabsAppender = (selector) => {
    // TASK 4
    // ---------------------
    // Implement this function which takes a css selector as its only argument.
    // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
    // Find the array of topics inside the response, and create the tabs using the Tabs component.
    // Append the tabs to the element in the DOM that matches the selector passed to the function.
    const element = document.querySelector(selector);
    console.log(element)
    axios.get('https://lambda-times-api.herokuapp.com/topics')
        .then(({data}) => {
        const newTab = Tabs(data);
        element.appendChild(newTab)
    })
        .catch(err => console.log(err));


}

export { Tabs, tabsAppender }
