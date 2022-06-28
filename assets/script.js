console.log("Handmade website by Pablo Moreno (www.aazzzuuppp.com)");


var $langUS = document.querySelector('#langUS');
var $langES = document.querySelector('#langES');

var $contentUS = document.querySelector('.contentUS');
var $contentES = document.querySelector('.contentES');

var $language = document.querySelector('.language');


function showUS() {
    $contentUS.classList.replace("hide", "show");
    $language.classList.add("hide");
}

function showES() {
  $contentES.classList.replace("hide", "show");
  $language.classList.add("hide");
}

$langUS.addEventListener("click", showUS ,false);
$langES.addEventListener("click", showES, false);




var $emailEN = document.querySelector(".emailEN");
var $copyemailEN = document.querySelector(".copymailEN");
var $emailcopiedEN = document.querySelector(".emailcopiedEN");

function hoverToMailEN() {
  $emailEN.classList.add("hide");
  $emailEN.classList.remove("show");
  $copyemailEN.classList.add("show");
}
$emailEN.addEventListener('mouseenter', hoverToMailEN)

function hoverOutEN() {
  if ($emailcopiedEN.classList.contains("show")){
    }
  else {
    $emailEN.classList.remove("hide");
    $emailEN.classList.add("show");
    $copyemailEN.classList.remove("show");
    }
}
$copyemailEN.addEventListener('mouseleave', hoverOutEN)

function copyMailEN() {
  navigator.clipboard
    .writeText('juanmorenoesteban@opendeusto.es');
    $emailEN.classList.add("hide");
    $copyemailEN.classList.remove("show");
    $emailcopiedEN.classList.add("show");
  setTimeout(function(){
    $emailcopiedEN.classList.remove("show");
    $emailEN.classList.remove("hide");
    $emailEN.classList.add("show");
  }, 2000);
}
$copyemailEN.addEventListener("click", copyMailEN);
$emailEN.addEventListener("touchstart", copyMailEN);


var $emailES = document.querySelector(".emailES");
var $copyemailES = document.querySelector(".copymailES");
var $emailcopiedES = document.querySelector(".emailcopiedES");

function hoverToMailES() {
  $emailES.classList.add("hide");
  $emailES.classList.remove("show");
  $copyemailES.classList.add("show");
}
$emailES.addEventListener('mouseenter', hoverToMailES)

function hoverOutES() {
  if ($emailcopiedES.classList.contains("show")){
    }
  else {
    $emailES.classList.remove("hide");
    $emailES.classList.add("show");
    $copyemailES.classList.remove("show");
    }
}
$copyemailES.addEventListener('mouseleave', hoverOutES)

function copyMailES() {
  navigator.clipboard
    .writeText('juanmorenoesteban@opendeusto.es');
    $emailES.classList.add("hide");
    $copyemailES.classList.remove("show");
    $emailcopiedES.classList.add("show");
  setTimeout(function(){
    $emailcopiedES.classList.remove("show");
    $emailES.classList.remove("hide");
    $emailES.classList.add("show");
  }, 2000);
}
$copyemailES.addEventListener("click", copyMailES);
$emailES.addEventListener("touchstart", copyMailES);


/* -----------------------------------
PM footer
-------------------------------------- */

function clikShowMade() {

  var $pmtext = document.getElementsByClassName("pmtext");
    for(var i = 0; i < $pmtext.length; i++) {
      $pmtext[i].classList.add("pmshow");}

  var $pmlogo = document.getElementsByClassName("pmlogo");
    for(var i = 0; i < $pmlogo.length; i++) {
      $pmlogo[i].classList.add("pmhide");}

     setTimeout(function(){
      var $pmtext = document.getElementsByClassName("pmtext");
        for(var i = 0; i < $pmtext.length; i++) {
          $pmtext[i].classList.remove("pmshow");}

      var $pmlogo = document.getElementsByClassName("pmlogo");
        for(var i = 0; i < $pmlogo.length; i++) {
          $pmlogo[i].classList.remove("pmhide");}
  }, 5000);
}

function hoverToTurn() {
  var $pmlogo = document.getElementsByClassName("pmlogo");
    for(var i = 0; i < $pmlogo.length; i++) {
      $pmlogo[i].classList.add("pmlogoturn");}

   setTimeout(function(){
    var $pmlogo = document.getElementsByClassName("pmlogo");
    for(var i = 0; i < $pmlogo.length; i++) {
      $pmlogo[i].classList.remove("pmlogoturn");}
  }, 1000);
}

var $pmlogo = document.querySelectorAll(".pmlogo").length;
var $pmtext = document.querySelectorAll(".pmtext").length;

for (var i = 0; i < $pmlogo ; i++) {
  document.querySelectorAll(".pmlogo")[i].addEventListener('mouseenter', hoverToTurn, false);
}

for (var i = 0; i < $pmlogo ; i++) {
  document.querySelectorAll(".pmlogo")[i].addEventListener("click", clikShowMade, false);
}