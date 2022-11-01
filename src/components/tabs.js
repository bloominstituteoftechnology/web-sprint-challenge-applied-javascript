const Tabs = (topics) => {
  const topicBody = document.createElement('div')
  topicBody.classList.add('topics')
  
  topics.forEach(topics => {
    const thing = document.createElement('div')
    thing.classList.add('tab')
    thing.textContent = topics
    
    topicBody.appendChild(thing)
    
  });
  // console.log(topicBody)
  return topicBody
}

const tabsAppender = (selector) => {
  axios.get(`http://localhost:5001/api/topics`)
   .then(response => {
  const mountingpoint = document.querySelector(selector)
  const data = Tabs(response.data.topics)
  mountingpoint.appendChild(data)
})
}

export { Tabs, tabsAppender }