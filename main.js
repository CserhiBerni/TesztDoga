import './style.css'

let numberList = [];

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addNumber").addEventListener("click", () => {
    let number = parseInt(document.getElementById("input").value);
    numberList.push(number);
    document.getElementById("list").innerHTML = "";
    document.getElementById("maximum").innerHTML = "";

    for (let i = 0; i < numberList.length; i++) {
      let li = document.createElement("li");
      li.textContent = numberList[i];
      document.getElementById("list").appendChild(li);
    }
  });

  document.getElementById("showMaximum").addEventListener("click", () => {
    document.getElementById("maximum").innerHTML = 
    `
    A lista maximuma: ${maximum(numberList)}
    `;
  });
});

function maximum(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}