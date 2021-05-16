import axios from "axios";
  

  // TASK 3
  // ---------------------
  // This function takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.

  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using `textContent`.
  //
  // <div class="topics">
  //   <div class="item"> javascript </div>
  //   <div class="item"> bootstrap </div>
  //   <div class="item"> technology </div>
  // </div>
  
  // Psuedo-coding:
  // Create the compenents normally, then something like topics[1++] for the textContent.
  // It will nood to be looped. a for loop or a forEach most likely.


// let numArr = [1,2,3];


// items(numArr)

// console.log(items(numArr));





// TASK 4

// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
// Find the array of topics inside the response, and create the items using the items component.
// Append the items to the element in the DOM that matches the selector passed to the function.
//


const Tabs = (topics) => {

  const topicsDIV = document.createElement('div') // Just a containter.
  topicsDIV.classList.add('topics')               // Container class name.

  topics.forEach((i) => {                         // Iterates over argument array.
    let itemDIVS = document.createElement('div')  // Creates = <div> </div>
    itemDIVS.classList.add('tab')                 // Creates = <div class="item"> </div>
    itemDIVS.textContent = i;                     // Creates = <div class="item"> "ELEMENT OF ARRAY </div>
    topicsDIV.appendChild(itemDIVS)               // Creates = <div class="topics"> 
                                                  //             <div class="item"> "ELEMENT OF ARRAY </div>
                                                  //           </div>
  })
  return topicsDIV;                               // Parent.
}


const tabsAppender = (selector) => {

  axios.get('https://lambda-times-api.herokuapp.com/topics')
        
       .then(response => {
         document.querySelector(selector).appendChild(Tabs(response.data.topics))
        //  console.log(response);
       })
       .catch(error => {
          console.log(error);
       })
}


























export { Tabs, tabsAppender  }
