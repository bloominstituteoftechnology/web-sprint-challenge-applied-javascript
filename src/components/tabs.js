import axios from "axios";

const Tabs = (topics) => {
  const topicDiv = document.createElement("div");

  topicDiv.classList.add("topics");

  topics.forEach((top) => {
    const topic = document.createElement("div");
    topic.classList.add("tab");
    topic.textContent = top;
    topicDiv.appendChild(topic);
    return topic;
  });

  return topicDiv;
};

const tabsAppender = (selector) => {
  axios.get("http://localhost:5000/api/topics")
    .then(resp => {
      const topicArr = resp.data.topics;
      document.querySelector(selector).appendChild(Tabs(topicArr));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Tabs, tabsAppender };
