// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios 
 .get("https://lambda-times-api.herokuapp.com/topics")
 .then(res => {
     const topics = res.data.topics;
     console.log(topics)
     topics.forEach(element => {
        const topicDiv = document.querySelector(".topics")
        const tabTopics = document.createElement("div")
        tabTopics.classList.add("tab")
        tabTopics.textContent = element
        topicDiv.appendChild(tabTopics)
     });
     console.log("Catch")
     }
     
 )
 .catch(err => {
     console.log("Something is wrong in Denmark")
 })


// arr.forEach(item => {
//     let childList =  document.createElement("li"); 
//      childList.textContent = item;
//      ulList.append(childList);
//     })









// .then(myLink => {
//     // const myLinkValues = myLink.data.values;
//     for(let i=0;i < myLink.length;i++) {
//         const topics = myLink[i]
//         console.log(topics)
//         console.log(topicTabs)
//         debugger;
//         topicDiv.appendChild(topicTabs)

//     } 
//     // console.log(myLink.data)
// });

// .catch(err => {
//     console.log(error);
// })

