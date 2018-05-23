"use strict";

let id;
let orgColor;

document.addEventListener("DOMContentLoaded", loadSvg);




async function loadSvg() {

    let mySvg = await fetch("pie.svg");
    let svg = await mySvg.text();


    document.querySelector("#pie").innerHTML = svg;

    document.querySelector("#one").setAttribute("fill", "#cal1")

}


document.querySelector("#pie").addEventListener("mouseover", changeColor);

function changeColor() {
  id = event.target.getAttribute("id");
  orgColor = document.querySelector("#"+id).getAttribute("fill");
  document.querySelector("#"+id).setAttribute("fill", "#bada55");
}

document.querySelector("#pie").addEventListener("mouseout", revertColor);

function revertColor() {
  id = event.target.getAttribute("id");
  document.querySelector("#"+id).setAttribute("fill", orgColor);
}