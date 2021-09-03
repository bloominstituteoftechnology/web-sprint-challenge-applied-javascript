const entryPoint = document.querySelector('.tabs-container');

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
  const tab1 = document.createElement('div');
  const tab2 = document.createElement('div');
  const tab3 = document.createElement('div')

  topicsDiv.classList.add('topics');
  topicsDiv.div.classList.add('tab')
}

const tabsAppender = (selector) => {
  try {
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
    const resp = axios.get('http://localhost:5000/api/topics');
    for (let i = 0; i < resp.data.message.length; i++){
      const articles = {topics}
      const tabs = Tabs(topics);
    }
  } catch (err) {
    const errorText = document.createElement('p');
    errorText.textContent = 'Something went wrong please try again'
  }
}
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }
