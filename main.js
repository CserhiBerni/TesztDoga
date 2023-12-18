import './style.css'

let numberList = [];

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addNumber").addEventListener("click", () => {
    let number = parseInt(document.getElementById("input").value);
    numberList.push(number);
    document.getElementById("list").innerHTML = "";
    document.getElementById("minimum").innerHTML = "";

    for (let i = 0; i < numberList.length; i++) {
      let li = document.createElement("li");
      li.textContent = numberList[i];
      document.getElementById("list").appendChild(li);
    }
  });

  document.getElementById("showMinimum").addEventListener("click", () => {
    document.getElementById("minimum").innerHTML = 
    `
    A lista minimuma: ${minimum(numberList)}
    `;
  });
});

function minimum(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}