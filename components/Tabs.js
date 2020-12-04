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



function tabMaker(data){
    
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const div5 = document.createElement('div')

    div1.append(div2)
    div1.append(div3)
    div1.append(div4)
    div1.append(div5)

    div1.classList.add(tab)
    div2.classList.add(tab)
    div3.classList.add(tab)
    div4.classList.add(tab)
    div5.classList.add(tab)

    div1.textContent = data.topics[0];
    div2.textContent = data.topics[1];
    div3.textContent = data.topics[2];
    div4.textContent = data.topics[3];
    div5.textContent = data.topics[4];

   return div1;


}


const tabs = document.querySelector('div.topics')
axios.get('https://lambda-times-api.herokuapp.com/topics')
.then( response => {
    
    response.data.topics.forEach( item => {
        let newTab = tabMaker(item);
        tabs.appendChild(newTab);

    })
})
.catch( error => {
    console.log("Error: Topics.js");
})
