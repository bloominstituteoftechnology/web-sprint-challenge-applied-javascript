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

const dataFunc = function(dataN) {
    let topics = document.querySelector(".topics")

    let tab = document.createElement("div")
    tab.classList.add("tab")
    tab.textContent = 'all'
    topics.appendChild(tab)
for(let i = 0; i < dataN.length; i++) {

    let tab = document.createElement("div")
    tab.classList.add("tab")
    tab.textContent = dataN[i]
    topics.appendChild(tab)

  }
}

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(function (res) {
  console.log('Response: ', res.data);
  let rdata = res.data.topics
  return rdata
})
.then(dataFunc)
.catch(function (err) {
  console.log('Error Came: ', err);
},[])

