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
  const topic = document.createElement('div')
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')

  topic.appendChild(tab1)
  topic.appendChild(tab2)
  topic.appendChild(tab3)
  
  topic.classList.add('topics')
  tab1.classList.add('tab1')
  tab2.classList.add('tab2')
  tab3.classList.add('tab3')

  topic.textContent = topics
  tab1.textContent = tab1
  tab2.textContent = tab2
  tab3.textContent = tab3

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
  const elDOM = document.createElement('div')
  elDOM.classList.add(selector)
  return elDOM.appendChild(Tabs(src = `https://lambda-times-api.herokuapp.com/topics`))
}

export { Tabs, tabsAppender }
