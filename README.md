# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

## Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

## Instructions

### A - Project Set Up

#### Repository Set Up

- [x] Create a forked copy of this project.
- [x] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [x] Create a new branch: `git checkout -b <firstName-lastName>`.
- [x] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [x] Push commits: `git push origin <firstName-lastName>`.

#### Launching the App

- [x] Navigate to the root of the project with your command line.
- [x] Run `npm install` to download the dependencies listed in the `package.json` file.
- [x] Run `npm start` to compile the project and serve it.
- [x] Navigate Chrome to the URL indicated in the output of the `npm start` command.

### B - Project Requirements

Your must complete all the following steps:

- [x] Step 0 is to link `src/index.js` to the `src/index.html` file using a script tag.
- [x] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [x] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [x] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- Careful adding your script tag in Step 0: the code inside `index.js` needs the DOM to be fully built before executing.
- Careful if you choose to install Axios using another script tag: the order in which script tags execute is important.
- If your development server stops "auto reloading", manually kill it and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### C - Stretch Goals

**IMPORTANT:** Work on stretch goals in a **new branch**. You can branch off of `<firstName-lastName>` by executing `git checkout -b stretch`.

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Use the tabs at the top of the page to filter articles by topic.

## Submission format

There are two possible ways to submit this project to Canvas. Lambda Staff will let you know which one to use:

1. Submitting a pull request to merge `<firstName-lastName>` branch into `main`.
2. Setting up your fork on Github to submit via Codegrade, pushing commits to your `<firstName-lastName>` branch.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?
> The DOM is known as the Document Object Model, which is a visual representation/conceptualization of the HTML tree structure on a browser giving the user the ability to traverse through HTML elements on a browser as single nodes.

2. What is an event?
> An event is any interaction a user has with the page on a browser.  In order to capture these events, you need to append event listeners that are watching for these events to occur.  Once they occur, you have the ability to target the event and to control what that event does or doesn't do.

3. What is an event listener?
> Answered it in the above response.

4. Why would we convert a NodeList into an Array?
> Because Nodelists aren't actual arrays and because that is so, methods in the array prototype will not be recognized as part of a Nodelist.  In order to manipulate the Nodelist like you would an array, you would need to convert it first.

5. What is a component?
> A component is a block of reusable code that you can use throughout your program so that you're able to minimize resources to rewrite again, as representative of elements on a page.  A component for a navigation bar, for instance.
