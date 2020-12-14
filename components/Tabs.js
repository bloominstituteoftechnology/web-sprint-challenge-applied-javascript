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



axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res =>{
       res.data.topics.forEach( item => {
         let newTap = tapCreator(item);
         document.querySelector('.topics').appendChild(newTap);
     })
    })
    .catch(err => {
        console.log('axios is not working in tap')
    })
    
 function tapCreator(topicText){
        let newTap = document.createElement('div');
        newTap.textContent = topicText;
        newTap.classList.add('tab');
    
        return newTap;
    }
    

    // let newTopics= data.map((arrayItem) => {
    // let tap = TapCreator(arrayItem);
      
    //     return tap;
    //   });

    //   const title=document.getElementsByClassName('title');



    //   newTopics.forEach(component => {
    //     title.appendChild(component);
    //   });





