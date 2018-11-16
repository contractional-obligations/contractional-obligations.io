



$(document).ready( function() {
  var myArrayC = [
            "mustn't",  "mustn't've", "mightn't",  "mightn't've", "may've", "mayn't", "mayn't've",  "might've", "hadn't", "hadn't've", "could've", "couldn't've", "couldn't", "wouldn't", "wouldn't've", /**/
];
var myArrayP = [
          "he", "she", "they", "it", "something" /**/
];

var randomItem = myArrayC[Math.floor(Math.random()*myArrayC.length)];
var randomItemtwo = myArrayC[Math.floor(Math.random()*myArrayC.length)];
var randomItemP = myArrayP[Math.floor(Math.random()*myArrayP.length)];
var randomItemPtwo = myArrayP[Math.floor(Math.random()*myArrayP.length)];

document.getElementById('secondC').innerHTML = randomItem;

document.getElementById('firstC').innerHTML = randomItemtwo;

document.getElementById('secondP').innerHTML = randomItemP;

document.getElementById('firstP').innerHTML = randomItemPtwo;


$("#randy").click( function(){
  var myArrayC = [
            "mustn't",  "mustn't've", "mightn't",  "mightn't've", "may've", "mayn't", "mayn't've",  "might've", "hadn't", "hadn't've", "could've", "couldn't've", "couldn't", "wouldn't", "wouldn't've", /**/
];
var myArrayP = [
          "he", "she", "they", "it", "something" /**/
];

var randomItem = myArrayC[Math.floor(Math.random()*myArrayC.length)];
var randomItemtwo = myArrayC[Math.floor(Math.random()*myArrayC.length)];
var randomItemP = myArrayP[Math.floor(Math.random()*myArrayP.length)];
var randomItemPtwo = myArrayP[Math.floor(Math.random()*myArrayP.length)];

document.getElementById('secondC').innerHTML = randomItem;

document.getElementById('firstC').innerHTML = randomItemtwo;

document.getElementById('secondP').innerHTML = randomItemP;

document.getElementById('firstP').innerHTML = randomItemPtwo;

});




  var isMobile = window.matchMedia("only screen and (max-width: 600px)");

   if (isMobile.matches) {
        var viewportHeight = $('.main-wrap').css({ height: window.innerHeight });
        $('.main-wrap').css({ height: viewportHeight });
          //Conditional script here
      };



    //public function
    function random_array( aArray ) {
        var rand = Math.floor( Math.random() * aArray.length + aArray.length );
        var randArray = aArray[ rand - aArray.length ];
        return randArray;
    };
    });
