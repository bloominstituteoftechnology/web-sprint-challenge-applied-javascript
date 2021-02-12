import axios from "axios";

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
  const topicsMain = document.createElement('div');
  topicsMain.classList.add('topics');
  const array = Array.from(topics.topics);
  // console.log(array) //! i checked array here

  //! create div for each string from 'topics'
   const div = array.map((topic) => {
   const topicCreate = document.createElement('div');
   topicCreate.classList.add('tab');
   topicCreate.textContent = topic;
   return topicCreate;
  })
  //! create hierarchy for created divs and main div
   div.forEach(div => {
     topicsMain.appendChild(div);
   })
   topicsMain.addEventListener('click', event => {
    const some = document.querySelectorAll('id');
    console.log(some)
    if (event.target.textContent == 'javascript'){
      some.forEach(item => {
        if (item.className != 'javascript'){
          item.parentElement.style.display = 'none'
        }
      })
    }
    else if (event.target.textContent == 'bootstrap'){
      some.forEach(item => {
        if (item.className != 'bootstrap'){
          item.parentElement.style.display = 'none'
        }
      })
    }
    else if (event.target.textContent == 'technology'){
      some.forEach(item => {
        if (item.className != 'technology'){
          item.parentElement.style.display = 'none'
        }
      })
    }
    else if (event.target.textContent == 'jquery'){
      some.forEach(item => {
        if (item.className != 'jquery'){
          item.parentElement.style.display = 'none'
        }
        
      })
    }
    else if (event.target.textContent == 'node.js'){
      some.forEach(item => {
        if (item.className != 'node'){
          item.parentElement.style.display = 'none'
        }
        
      })
    }
   })
   return topicsMain;
}
//!check function
// const a = ['it','should','work'];
// console.log(Tabs(a))

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
  .get('https://lambda-times-api.herokuapp.com/topics')
  .then(res => {
    const final = Tabs(res.data);
    const select = document.querySelector(selector);
    select.appendChild(final);
  })
  .catch(err => {
    console.log(err)
  })

}

export { Tabs, tabsAppender }
