'use strict'

let one = document.querySelector("#one");
let skills = document.querySelector(".skills");
let two = document.querySelector("#two");
let about = document.querySelector(".about");
let three = document.querySelector("#three");
let projects = document.querySelector(".projects");
let four = document.querySelector("#four");
let education = document.querySelector(".education");
let five = document.querySelector("#five");
let resume = document.querySelector(".resume");


console.log(skills);
console.log(about);


window.addEventListener ('scroll', (event) => {
  if (window.scrollY > 200){
      skills.classList.add("fadein");
      one.classList.add("fadein");
  }

  if(window.scrollY > 400){
    about.classList.add("fadein");
    two.classList.add("fadein");
  }

  if(window.scrollY > 800){
    projects.classList.add("fadein");
    three.classList.add("fadein");
  }

  if(window.scrollY > 1200){
    education.classList.add("fadein");
    four.classList.add("fadein");
  }

  if(window.scrollY > 1600){
    resume.classList.add("fadein");
    five.classList.add("fadein");
  }
});

