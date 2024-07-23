let questions = document.querySelectorAll(".question");

var handleClick = (e) => {
  e.currentTarget.classList.toggle("selected");
  let answer = e.currentTarget.nextElementSibling;
  answer.classList.toggle("hidden");
};

questions.forEach((element) => {
  element.addEventListener("click", handleClick);
});
