import axios from 'axios';
const Tabs = (topics) => {
let mainDiv = document.createElement("div");
 	mainDiv.classList.add("topics");
 	topics.forEach((topic) => {
 		const topicDiv = document.createElement("div");
 		mainDiv.append(topicDiv);
 		topicDiv.classList.add("tab");
 		topicDiv.textContent = topic;
 	});

 	return mainDiv;
 };

const tabsAppender = (selector) => {
axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((response) => {
    document.querySelector(selector).appendChild(Tabs(response.data.topics));
    console.log(document.querySelector(selector))
  })
  .catch((error) => {
    console.log("something went wrong", error);
  });
}

export { Tabs, tabsAppender }
