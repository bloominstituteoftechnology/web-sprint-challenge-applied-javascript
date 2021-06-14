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
  const topicContainer = document.createElement('div')
  const javaTab = document.createElement('div') 
  const bootTab = document.createElement('div') 
  const techTab = document.createElement('div') 
  const jQTab = document.createElement('div')
  const nodeTab = document.createElement('div')

  topicContainer.appendChild(javaTab)
  topicContainer.appendChild(bootTab)
  topicContainer.appendChild(techTab)
  topicContainer.appendChild(jQTab)
  topicContainer.appendChild(nodeTab)

  topicContainer.classList.add('topics')
  javaTab.classList.add('tab')
  bootTab.classList.add('tab')
  techTab.classList.add('tab')
  jQTab.classList.add('tab')
  nodeTab.classList.add('tab')

  
  javaTab.textContent = 'javascript'
  bootTab.textContent = 'bootstrap'
  techTab.textContent = 'technology'
  jQTab.textContent = 'JQuery'
  nodeTab.textContent = 'NODE.JS'



  return topicContainer
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`https://lambda-times-api.herokuapp.com/topics`).then(res =>{
    const newTabs = Tabs(res.data)
    document.querySelector(selector).appendChild(newTabs)
  })
}

export { Tabs, tabsAppender }
