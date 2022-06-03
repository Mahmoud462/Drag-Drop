const btn = document.querySelector("#btn"),
  input = document.querySelector(".text input"),
  boxes = document.querySelectorAll(".boxes-con > ul"),
  lis = document.querySelectorAll(".boxes-con ul li"),
  mainBox = document.querySelector("#main-box");

btn.addEventListener("click", function () {
  let val = input.value;
  if (val.trim() === "") return;
  let newLi = document.createElement("li");
  newLi.textContent = val;
  newLi.setAttribute("data-text", val);
  mainBox.append(newLi);
});
