/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
    //   const axiosPromise = axios.get("https:lambda-times-backend.herokuapp.com/topics")  
    //   console.log(axiosPromise) 

   axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(Response => {
        console.log(Response);
        
  
    })
     const NewTab = (tabs) => {
     
       const Javascript = document.createElement('div')
       const bootstrapTab = document.createElement('div')
      
       const technologyTab = document.createElement('div')
       
       const jqueryTab = document.createElement('div')
       
       const nodejsTab = document.createElement('div')

        Javascript.textContent = "Javascript"
        bootstrapTab.textContent = "Bootstrap"
        technologyTab.textContent ="Technology"
        jqueryTab.textContent = "jquery"
        nodejsTab.textContent = "node.js"

        Javascript.classList.add('tab')
        bootstrapTab.classList.add('tab')
        technologyTab.classList.add('tab')
        jqueryTab.classList.add('tab')
        nodejsTab.classList.add('tab')
        
        Javascript.appendChild(bootstrapTab)
        Javascript.appendChild(technologyTab)
        Javascript.appendChild(jqueryTab)
        Javascript.appendChild(nodejsTab)



       return Javascript;
    }
        document.querySelector('.topics').appendChild(NewTab());
        
    const entrypoint = document.querySelector('.topics')

    axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(Response => {
        console.log(Response);
       
        Response.data.topics.forEach(Element => {
            const newtab1 = NewTab(Element);
            entrypoint.appendChild(newtab1)
            // console.log(newtab1)
            console.log(` this is my element ${Element}`)
        });
        

    })