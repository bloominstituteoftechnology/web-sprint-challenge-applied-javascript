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

const divTopics = document.querySelector('.topics');

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        // console.log('res.data.topics:',res.data.topics);
        // const topicsArray = Array.from(res.data.topics);
        // console.log(topicsArray);
        res.data.topics.forEach(element => { // WHY .data? is the res the promise and the object 'data'?
            //console.log(res);
            const div = document.createElement('div');
            div.classList.add('tab');
            div.textContent = element;
            divTopics.append(div);
        })
        
    })
    .catch(err => {
        console.log('you have an error:', err)
        //debugger;
    }

    )
         
    