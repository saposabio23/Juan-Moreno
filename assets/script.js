
var $langUS = document.querySelector('#langUS');
var $langES = document.querySelector('#langES');
var $langFR = document.querySelector('#langFR');

var $contentUS = document.querySelector('.contentUS');
var $contentES = document.querySelector('.contentES');
var $contentFR = document.querySelector('.contentFR');

var $language = document.querySelector('.language');


function showUS() {
    $contentUS.classList.replace("hide", "show");
    $language.classList.add("hide");
}

function showES() {
  $contentES.classList.replace("hide", "show");
  $language.classList.add("hide");
}

function showFR() {
  $contentFR.classList.replace("hide", "show");
  $language.classList.add("hide");
}

$langUS.addEventListener("click", showUS ,false);
$langES.addEventListener("click", showES, false);
$langFR.addEventListener("click", showFR, false);
