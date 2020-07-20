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

const infiniteTabs =() => {
    axios
        .get('https://lambda-times-backend.herokuapp.com/topics')
            .then(response => {
                console.log(response);
                tabCollection = tabCreator(response.data['topics'])
                console.log(tabCollection)
                tabCollection.forEach(element => {
                    const iteration = response.data['topics'][element];
                    const filled = tabCreator(iteration);
                    const tabAttach = document.querySelector('.topics');
                    tabAttach.appendChild(filled);
                    return filled;
                });
            })
            .catch( error => {
                console.log('error')
                return error;
            })
}

infiniteTabs();


 const tabCreator = (info) => {
    const divTab = document.createElement('div');
    divTab.classList.add('tab');
    divTab.textContent = info;

    return divTab;
 }

 




// const infiniteTabs = (array) => {
//     array.forEach(element => {
//         axios
//             .get('https://lambda-times-backend.herokuapp.com/topics')
//                 .then(response => {
//                     const tabAttach = document.querySelector('.topics');
//                     const tab = tabCreator(response.topics);
//                     tabAttach.appendChild(tab);
//                     return tab;
//                 })
//                 .catch(error => {
//                     console.log('error');
//                     return error;
//                 })
//     });
// }


        // axios
//     .get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response => {
//         const axioCycle = (axios) => {
//             axios.forEach(element => {
//                 let info = element;

//                 console.log(info);
//                 return info;
//             });
//         }
//         const tabCreator = (info) => {
//             const divTab = document.createElement('div');
//             divTab.classList.add('tab');
//             divTab.textContent = info;
//         }
//         return response;
//     })
//     .catch(error => {
//         return error;
//     })
//     return topics;
