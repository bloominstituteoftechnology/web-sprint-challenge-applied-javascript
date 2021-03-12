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
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // console.log(topics);
  let topicDiv = document.createElement('div');
  topicDiv.classList.add('topics');
  // iterate through the array
  topics.forEach(function(topic){
    let singleTopicDiv = document.createElement('div');
    singleTopicDiv.classList.add('tab');
    singleTopicDiv.textContent = topic;
    topicDiv.appendChild(singleTopicDiv);
  });
  console.log(topicDiv);
  return topicDiv;
}

const tabsAppender = (selector) => {
  // console.log(selector);
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  const tabs = document.querySelector(selector);


  axios
    .get(`https://lambda-times-api.herokuapp.com/topics`)
    .then((res) => {
      // console.log(res)
      const topicsArray = res.data.topics;
      console.log(topicsArray);
      const topicDiv = Tabs(topicsArray);
      console.log(topicDiv);
      tabs.appendChild(topicDiv);
    })
    .catch((err) => {
      console.log(err);
    });

}

export { Tabs, tabsAppender }
