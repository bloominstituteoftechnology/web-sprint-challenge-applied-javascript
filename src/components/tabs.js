import axios from "axios"


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


const Tabs = (topics) => {
  const topicsDiv = document.createElement('div')
  topicsDiv.classList.add('topics')
  topics.forEach(item =>{
    const tabDiv = document.createElement('div')
    tabDiv.textContent = item
    tabDiv.classList.add('tab')
    topicsDiv.appendChild(tabDiv)
  })
  return topicsDiv
}




  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  
let topicsArray = [];

axios.get(`http://localhost:5000/api/topics`)
  .then(res=>{
    const tab = Tabs(e)
    topicsArray.push('tab')
  })
  .catch(err=>{
    console.log('error')
  })
  .finally(() => console.log('done'))



const tabsAppender = (selector) => {
  topicsArray.forEach(e=>{
    selector.appendChild(e)
  })
  }
  

  // selector.forEach(item=>{
  //   axios.get(`http://localhost:5000/api/topics`)
  //   entryPoint = document.querySelector(`.${item}`)
  //   .then(res=>{
  //     const tab = Tabs(res.data)
  //     entryPoint.appendChild(tab)
  //   })
  //   .catch(err=>{
  //     console.log('error')
  //   })
  //   .finally(() => console.log('done'))
  // })



export { Tabs, tabsAppender }
