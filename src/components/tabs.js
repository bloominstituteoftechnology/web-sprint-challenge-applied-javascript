import axios from 'axios'

const Tabs = (topics) => {

  const mainTab = document.createElement('div')

  mainTab.classList.add('topics')

  topics.forEach(topic => {
    let tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topic
    mainTab.appendChild(tab)
  })

  return mainTab
  
}

const tabsAppender = (selector) => {

  let entry = document.querySelector(selector)

  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(res => {
    let newTab = Tabs(res.data.topics)
    entry.appendChild(newTab)
  })
  .catch(err => console.log(err))
  
}

export { Tabs, tabsAppender }
