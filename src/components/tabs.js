import axios from 'axios';

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
  const div_topics = document.createElement('div');
  const div_tab1 = document.createElement('div');
  const div_tab2 = document.createElement('div');
  const div_tab3 = document.createElement('div');

  div_topics.classList.add('topics');
  div_tab1.classList.add('tab');
  div_tab2.classList.add('tab');
  div_tab3.classList.add('tab');

  div_topics.appendChild(div_tab1);
  div_topics.appendChild(div_tab2);
  div_topics.appendChild(div_tab3);

  div_tab1.textContent = topics[0];
  div_tab2.textContent = topics[1];
  div_tab3.textContent = topics[2];

  return div_topics;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const url = 'https://lambda-times-api.herokuapp.com/topics';
  axios.get(url)
    .then(res => {
      const array = res.data.topics;
      console.log(array);
      const subjects = Tabs(array);
      console.log(subjects);
      selector.appendChild(subjects);
  })
    .catch(err => {
      console.log(err)
  })
    .then(() => {
      console.log('Success ')
})
}

const selector =  document.querySelector('.tabs-container');
const returnSelector = (selector) =>{
  const selection = selector;
  return selection;
}

console.log();
tabsAppender(returnSelector(selector));

export { Tabs, tabsAppender }
