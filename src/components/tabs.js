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
  const topicsDiv = document.createElement('div');
  topics.forEach((el, i) => {
    let newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = el;
    topicsDiv.appendChild(newTab);
  });
  topicsDiv.classList.add('topics');
  return topicsDiv;
}



const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics`).then(data => {
    // console.log(data);
    let newArr = [];
    newArr = data.data.topics;
    // console.log(newArr);
    let newT = Tabs(newArr);
    console.log(newT);
    let chosenSelector = document.querySelector(selector);
    chosenSelector.appendChild(newT);
  })
  // }).then(newArr => {
    
  // }).then(newT => {
    
  
    
}

export { Tabs, tabsAppender }
