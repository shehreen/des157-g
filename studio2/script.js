'use strict';

console.log('reading.js');

/*click to show the corny jokes via overlay and then click again to close*/



function headerSwap(){
  // console.log("Character clicked");
  var headerTexts = document.getElementById('header1');
  var character = document.getElementById('character');
  var fire = document.getElementById('fire');
  // console.log(character);

  if (header1.innerHTML == "don't touch my stuff"){
    header1.innerHTML = "seriously";
  } else if ( header1.innerHTML == "seriously") {
    header1.innerHTML = "bitch";
    character.src = 'images/charactersad.svg'
  } else if ( header1.innerHTML == "bitch") {
    header1.innerHTML = "@#!@$#%#%";
    character.src = 'images/charactersad.svg';
    fire.style.display="block";

  } else if (header1.innerHTML == "@#!@$#%#%") {
    header1.innerHTML =  "don't touch my stuff";
    character.src = 'images/character.svg'
    fire.style.display="none";
  }

}

var laptop = document.querySelector('laptopButton');
var keys = document.querySelector('keysButton');
var fieldbook = document.querySelector('fieldbookButton');
var close = document.querySelector('close');
var popUp = document.querySelector('.popUp');
var header2 = document.querySelector('h2');
var text = document.querySelector('p');
var close = document.querySelector('.close');

laptopButton.addEventListener('click', function() {
  popUp.style.display = 'block';
  header2.innerHTML = 'What do you call a laptop that sings?';
  text.innerHTML = 'A Dell.';
  });

keysButton.addEventListener('click', function() {
  popUp.style.display = 'block';
  header2.innerHTML = 'I love the smell of my F5 key.';
  text.innerHTML = ' It’s very refreshing.';
  });

fieldbookButton.addEventListener('click', function() {
  popUp.style.display = 'block';
  header2.innerHTML = 'Yeah, I wasn\'t able to make reservations at the libary' ;
  text.innerHTML = 'They\'re completely booked.';
  });

close.addEventListener('click', function() {
popUp.style.display = 'none';
});


//document.querySelector('#header1').innerHTML = "seriously";

/*change h1 text to "bitch" after you touch notebook*/

/*change h1 text to "asdfghjklskjhg@!#$@" after you touch keys*/
