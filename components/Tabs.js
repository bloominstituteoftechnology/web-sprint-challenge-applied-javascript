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






























// const topicBar = document.querySelector('tabs');
// const topics = document.querySelector('topics');

// axios
// .get('https://lambda-times-api.herokuapp.com/topics')
// .then((result) => {
//     const banana = result.data;
//     const barDir = randFunct(banana);
//     topics.appendChild(barDir);
// })
// .catch((error) => {
//     console.log(error);
// })

// function randFunct() {
//     const buttonOne = document.createElement('div');
//     const buttonTwo = document.createElement('div');
//     const buttonThree = document.createElement('div');
//     const buttonFour = document.createElement('div');
//     const buttonFive = document.createElement('div');

//     topics.appendChild(buttonOne);
//     topics.appendChild(buttonTwo);
//     topics.appendChild(buttonThree);
//     topics.appendChild(buttonFour);
//     topics.appendChild(buttonFive);

//     buttonOne.classList.add('tab');
//     buttonTwo.classList.add('tab');
//     buttonThree.classList.add('tab');
//     buttonFour.classList.add('tab');
//     buttonFive.classList.add('tab');

//     return topics;
// }
// console.log(randFunct());