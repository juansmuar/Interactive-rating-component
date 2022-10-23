# Make It Real - Interactive-rating-component

This is a solution to the Iteractive rating component component project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Visualize the card component in desktop a mobile resolution properly and select a rate option to submit.

## My process

### Built with

- HTML5
- CSS
- Flexbox
- Mobile-first workflow
- javaScript

### What I learned

In this project we learn how to make dynamic components with javaScript.

```css
.button:hover {
  background-color: var(--lightGrey);
  color: var(--white);
}

.button:focus {
  background-color: var(--orage);
  color: var(--white);
}
```

```js
btns.forEach(btn => btn.addEventListener("click", function (){
  rate = btn.value;
}));
```


### Continued development

We need to continue learning about how javaScript works in the frontend.

### Useful resources

- [Resource 1](https://www.javascripttutorial.net/dom/events/add-an-event-handler/) - This helped me to understand how to handle events.

## Author

- Juan Sebastián Muñoz


## Acknowledgments

Thanks to Yulany and the teacher.