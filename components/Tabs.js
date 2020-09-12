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

import axios from 'axios';

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(
        function(r){
            r.data.topics.forEach(element => {
                let div = document.createElement('div');
                div.classList.add('tab');
                div.textContent = element; 
                document.querySelector('.topics').appendChild(div);
            });
            let tabs = document.querySelectorAll('.tab');
            tabs[0].style.display = 'none';
            tabs[1].style.display = 'none';
            tabs[2].style.display = 'none';
            tabs[3].style.display = 'none';
            tabs[4].style.display = 'none';
        }
    )




