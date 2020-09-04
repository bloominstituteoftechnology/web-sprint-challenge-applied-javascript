
import axios from "axios"

  axios.get("https://lambda-times-api.herokuapp.com/topics")
  .then(stuff =>{
    const topics = document.querySelector('.topics')
    stuff.data.topics.forEach(element => {
      const tab = document.createElement('div')
      tab.classList.add('tab')
      tab.textContent = element
      topics.appendChild (tab)
    })
  })
  .catch(err => {
    console.log(err)
  })

