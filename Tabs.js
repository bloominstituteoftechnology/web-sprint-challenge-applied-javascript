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


// Make a request for a user with a given ID
axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(function (response) {
    // handle success
    const info = response.data
   return tabMaker(response.data)
   
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  

  function tabMaker(objectData){
   
    const final = document.querySelector(".topics")
    const topicone = document.createElement('div')
    const topictwo = document.createElement('div')
    const topicthree = document.createElement('div')
    const topicfour = document.createElement('div')
    const topicfive = document.createElement('div')
    
    topicone.className = "tab"
    topictwo.className = "tab"
    topicthree.className = "tab"
    topicfour.className = "tab"
    topicfive.className = "tab"

    topicone.textContent = "javascript"
    topictwo.textContent = "bootstrap"
    topicthree.textContent = "technology"
    topicfour.textContent = "jquery"
    topicfive.textContent = "node.js"
    
    
    final.appendChild(topicone)
    final.appendChild(topictwo)
    final.appendChild(topicthree)
    final.appendChild(topicfour)
    final.appendChild(topicfive)
    

    // return emptyarr.values

    return final;
  }
