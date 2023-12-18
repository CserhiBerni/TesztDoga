import './style.css'

let numberList = [];

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addNumber").addEventListener("click", () => {
    let number = parseInt(document.getElementById("input").value);
    numberList.push(number);
    document.getElementById("list").innerHTML = "";

    for (let i = 0; i < numberList.length; i++) {
      let li = document.createElement("li");
      li.textContent = numberList[i];
      document.getElementById("list").appendChild(li);
    }
  });
});