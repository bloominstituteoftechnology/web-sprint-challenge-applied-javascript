
import axios from 'axios'


const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
// element create
const topic = document.createElement('div');

const jScript = document.createElement('div');
const bStrap = document.createElement('div');
const tech = document.createElement('div');
//class add
topic.classList.add('topics');

jScript.classList.add('tab');
bStrap.classList.add('tab');
tech.classList.add('tab');

//content
jScript.textContent = 'javascript';
bStrap.textContent = 'bootstrap';
tech.textContent = 'technology';

//appending
topic.appendChild(jScript);
topic.appendChild(bStrap);
topic.appendChild(tech)

return topic
}
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

const url = `https://lambda-times-api.herokuapp.com/topics`

axios.get(url)
  .then(res => {
    const topics = res.data;
    const topicsArray = Array.from(topics.topics);
    Tabs(topicsArray);
    const tabholder = document.querySelector(selector);
    tabholder.appendChild(Tabs(topicsArray));
  })
  .catch(err =>{
    console.log(err);
  })
}
export { Tabs, tabsAppender }