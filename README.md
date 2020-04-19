# Sprint Challenge: Applied JavaScript - Lambda Times

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **the DOM and the concept of components**. During this sprint, you studied **the DOM, DOM Events, components, HTTP GET requests, and the Axios library**. In your challenge this week, you will demonstrate your mastery of these skills by creating an **online Lambda newspaper called "Lambda Times"**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components. In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the following example:

[Lambda Newspaper](./designs/design.png)

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?

1. What is an event?

1. What is an event listener?

1. Why would we convert a NodeList into an Array?

1. What is a component?

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project.
- [ ] Add your team lead as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2: Project Requirements

Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself. Your finished project must include all of the following requirements:

#### Build a Header component

- [ ] Preview the design [here](./designs/header.png).
- [ ] Work inside the `Header/index.js` file.
- [ ] Create a `Header` function. When invoked, it should return the following markup:

  ```html
    <div class="header">
      <span class="date">SMARCH 28, 2019</span>
      <h1>Lambda Times</h1>
      <span class="temp">98°</span>
    </div>
  ```

- [ ] Invoke your function.
- [ ] Append the returned markup to the DOM.

#### Tabs

#### Build tabs using data from an API

- [ ] Preview the design [here](./designs/tabs.png).
- [ ] Work inside the `Tabs/index.js` file.
- [ ] Use Axios to send a GET request to: `https://lambda-times-backend.herokuapp.com/topics`.
- [ ] Once the data resolves, use console logs or breakpoints to review the structure of the data.
- [ ] Iterate over the list of topics.
- [ ] At each iteration, create a new tab and append it to the DOM under `div.topics`.
- [ ] Each tab should look like the following markup:

  ```html
     <div class="tab">topic here</div>
  ```

#### Build a Card component

- [ ] Preview the design [here](./designs/card.png).
- [ ] Work inside the `Cards/Cards.js` file.
- [ ] Create a `Card` function that takes an article object as argument.
- [ ] When invoked, `Card` should return the following markup:

  ```html
    <div class="card">
      <div class="headline">{{headline of article}}</div>
      <div class="author">
        <div class="img-container">
          <img src={{author image url}} />
        </div>
        <span>By {{author name}}</span>
      </div>
    </div>
  ```

- [ ] Outside your function, use Axios to send a GET request to: `https://lambda-times-backend.herokuapp.com/articles`.
- [ ] Study the response data you get back, closely. This won't be as easy as just iterating over an array.
- [ ] Use your function to create a card for each article, and add each card to the DOM.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals.

Your stretch challenge is to write the functionality of a `Carousel` component. If you begin and don't finish, you should still submit with what you have. There is no need to request data for this exercise.

- [ ] Complete the carousel functionality in `Carousel.js`.
- [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.
- [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.
- [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic. Preview the functionality [here](designs/stretch.gif)

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
