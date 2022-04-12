
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

function showmail() {
   alert ("juanmorenoesteban@opendeusto.es");
}
