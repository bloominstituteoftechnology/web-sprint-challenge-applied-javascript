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


function tagMaker( arr ) {

    const tabs = document.querySelector("div.topics")
   
    arr.forEach(element => {
        const con = document.createElement("div");
        con.classList.add("tab")
        con.textContent = element;
        return tabs.appendChild(con)
    });
    
}

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(res => {
    tagMaker(res.data.topics)
    // console.log(res)
})
.catch(err => {
    console.log(err)
});