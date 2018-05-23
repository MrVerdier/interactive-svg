// NOT LINKED
"use strict";

let id;
let orgColor;
let byID;


document.addEventListener("DOMContentLoaded", loadSvg);


async function loadSvg() {

  let mySvg = await fetch("map.svg");
  let svg = await mySvg.text();
  let jsonData = await fetch("data.json"); 
  let json = await jsonData.json();
  console.log(json)

  document.querySelector("#map").innerHTML = svg;
}

document.querySelector("#map").addEventListener("mouseover", changeColor);

function changeColor() {
  id = event.target.getAttribute("id");
  orgColor = document.querySelector("#"+id).getAttribute("fill");
  document.querySelector("#"+id).setAttribute("fill", "#bada55");
}

document.querySelector("#map").addEventListener("mouseout", revertColor);

function revertColor() {
  id = event.target.getAttribute("id");
  document.querySelector("#"+id).setAttribute("fill", orgColor);
};

document.querySelector("#map").addEventListener("click", by);

function by() {
  byID = event.target.parentElement.getAttribute("id");
  console.log(byID);


document.querySelector("#info").textContent = byID;
}
