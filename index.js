let noOver = document.getElementById("no");
let yesOver = document.getElementById("yes");
let answerBox = document.getElementsByClassName("answer");

noOver.addEventListener("mouseover", reverseAns);
yesOver.addEventListener("click", yesss);

function reverseAns() {
  answerBox[0].classList.toggle("row-reverse");
}

function yesss() {
  document.getElementById("music").play();
  // window.scrollTo(0,document.body.scrollHeight);
  window.scrollTo(0, document.body.scrollHeight);
}
