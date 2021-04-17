import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  const mainTopics = document.createElement('div')
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')

  mainTopics.appendChild(tab1)
  mainTopics.appendChild(tab2)
  mainTopics.appendChild(tab3)

  tab1.textContent = topics
  tab2.textContent = topics
  tab3.textContent = topics



  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const mainTab = document.querySelector('.tabs-container')

  Tabs().classLiss.add(selector)

  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then((res) => {
      console.log(res, 'topics');
      const topicsList = res.data.topics;
      topicsList.forEach((item) => {
        const newTab = addTopic(item);
        mainTab.appendChild(newTab);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export { Tabs, tabsAppender }
