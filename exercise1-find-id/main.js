"use strict";

document.addEventListener("DOMContentLoaded", loadSvg);

async function getJson() {
     let jsonObjekt = await fetch("data.json");
     let elementer = await jsonObjekt.json();
     console.log(elementer);
}

async function loadSvg() {

    let mySvg = await fetch("layers.svg");
    let svg = await mySvg.text();


    document.querySelector("#layer").innerHTML = svg;

//  document.querySelector("#mac").setAttribute("fill", "#ca1")

};

document.querySelector("#layer").addEventListener(`click`, showElement); 

function showElement() {

    console.log(event.target.getAttribute("id"))

    const text = "<p>Her skal der stå noget herre sejt om den ting jeg trykker på</p>"
    let mac = document.querySelector("#mac")
    let phone = document.querySelector("#phone")
    let bike = document.querySelector("#bike")

  mac.addEventListener("click", macClick);
  phone.addEventListener("click", phoneClick);
  bike.addEventListener("click", bikeClick);

  function macClick() {
      document.querySelector("#text1").innerHTML = "This is a mac";
  }
  
  function phoneClick() {
    document.querySelector("#text2").innerHTML = "This is not mac";
}

function bikeClick() {
    document.querySelector("#text3").innerHTML = "This is also not mac";
}



};

