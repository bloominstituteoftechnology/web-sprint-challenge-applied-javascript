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
  
  //instantiating elements
  const div_topics = document.createElement('div');
  const div_tab1 = document.createElement('div');
  const div_tab2 = document.createElement('div');
  const div_tab3 = document.createElement('div');
  const div_tab4 = document.createElement('div');
  const div_tab5 = document.createElement('div');

  //setting class names
  div_topics.classList.add('topics');
  div_tab1.classList.add('tab');
  div_tab2.classList.add('tab');
  div_tab3.classList.add('tab');
  div_tab4.classList.add('tab');
  div_tab5.classList.add('tab');

  //adding text to elements
  div_tab1.textContent = topics[0];
  div_tab2.textContent = topics[1];
  div_tab3.textContent = topics[2];
  div_tab4.textContent = topics[3];
  div_tab5.textContent = topics[4];

  //setting element hierarchy
  div_topics.appendChild(div_tab1);
  div_topics.appendChild(div_tab2);
  div_topics.appendChild(div_tab3);
  div_topics.appendChild(div_tab4);
  div_topics.appendChild(div_tab5);

  //returing markup
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

  //instantiating axios get request from url
  const url = 'https://lambda-times-api.herokuapp.com/topics';
  axios.get(url)
    .then(res => {
      //instating data object
      const array = res.data.topics;

      //instantiating Tab object to return data
      const subjects = Tabs(array);

      //instantiating parent element and adding element object to the 
      document.querySelector(selector).appendChild(subjects);
  })
    .catch(err => {
      console.log(err)
  })
}

//define a selector callback
const selector =  document.querySelector('.tabs-container');

//call tabsAppender and pass in the callback
tabsAppender(selector);

export { Tabs, tabsAppender }
