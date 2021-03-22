const Tabs = (topics) => {
  let div = document.createElement('div');
  let tab1 = document.createElement('div');
  let tab2 = document.createElement('div');
  let tab3 = document.createElement('div');


  div.classList.add('topics');
  tab1.classList.add('tab');
  tab2.classList.add('tab');
  tab3.classList.add('tab');

  div.appendChild(tab1);
  div.appendChild(tab2);
  div.appendChild(tab3);

  for(let i = 0; i < div.length; i++){
    div[i] = topics[i]
  }


  // tab1.textContent = `javascript`;
  // tab2.textContent = `bootstrap`;
  // tab3.textContent = `technology`;

  return div
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  .then(res => {
    console.log('resData; ', res)
  })
  .catch(err => {
    console.error(err.message)
  });

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
