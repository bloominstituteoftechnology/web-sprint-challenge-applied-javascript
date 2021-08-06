# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [X] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [X] Open the assignment in Canvas and click on the "Set up git" option.
- [X] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [X] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [X] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [X] Navigate to the root of the project with your command line.
- [X] Run `npm install` to download the dependencies listed in the `package.json` file.
- [X] Run `npm start` to compile the project and serve it.
- [X] Navigate Chrome to `http://localhost:3000`
- [X] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [X] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [X] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [X] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes.
- [ ] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [ ] Please don't merge your own pull request and make sure **you are on your own repo**.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?

DOM is an acronym for 'Document Object Model'. The DOM is the data representation of the objects that make up the structure and content of a document on the web. The DOM is NOT a programming language. The DOM is a programming interface for HTML (HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser) and XML ( documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes an objects so that programming languages can connect to the page.

2. What is an event?

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if you want to. For example, if a user clicks on a button, you might want to redirect their browser to the corresponding web page.

3. What is an event listener?

Each available event has an event listener and an event handler. An event listener listens out for the event happening. An event handler is a block of code (usually a JavaScript function that the programmer creates) that runs when the event fires. The event handler is the code that is runs in response to it happening.

4. Why would we convert a NodeList into an Array?

NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll(), which is what we have been using! 
There are 2 varieties of NodeList: live and static. When the NodeList is live, changes in the DOM automatically update the collection. When the NodeList is static, any changes in the DOM do not affect the content of the collection. document.querySelectorAll() method returns a static NodeList.
The latest JavaScript ES6 release brought helpful methods for working with arrays: Array.forEach(), Array.every(), Array.some(), Array.filter(), etc. Unfortunately, when you use querySelectorAll() method it returns a NodeList instead of an array. You cannot use any of the helpful array methods on the NodeList. You would want to convert a NodeList into an array so that you could utilize the helpful array methods.

5. What is a component?

A component brings together markup, logic, and style in an encapsulated and reusable form. The idea behind components is to build functions that take data as arguments are return HTML elements. Generally speaking in the programming field of study, a component is an identifiable part of a larger program or construction.