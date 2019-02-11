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

//document.querySelector('#header1').innerHTML = "seriously";

/*change h1 text to "bitch" after you touch notebook*/

/*change h1 text to "asdfghjklskjhg@!#$@" after you touch keys*/
