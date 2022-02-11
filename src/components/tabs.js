const Tabs = (topics) => {
  const topicDiv = document.createElement('div')

  topicDiv.classList.add('topics')
 
  topics.forEach((top) => {
    const topic = document.createElement('div')
    topic.classList.add('tab')
    topic.textContent = top
    topicDiv.appendChild(topic)
    return topic
  })


  return topicDiv

 
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
