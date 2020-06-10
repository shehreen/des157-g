// click event listener for overlay quote

'use strict';
console.log('reading js');

// let i=1;
let counter=1;
const shuffle = [".q1",".q2",".q3",".q4",".q5",".q6",".q7"];

//random number generator to pull out of array and put into array for random
  
 setInterval(
   function(){
    
    // gets all the spans and puts them in spans
    let spans = document.querySelectorAll(".quote");

    for (let i = 0; i < spans.length; i++ ){
        spans[i].style.display="none";
    }

      let element = shuffle[counter];
      document.querySelector(element).style.display="block";

      
   if (counter == shuffle.length-1){
       counter = 0;
   }

   else {
      counter++;
   }
      
  }, 3000)
  
     //  $("." + shuffle[y]).css("z-index", i); 
     //$("." + styles[y]).css("background-color",colours[y]); 
     //i cycle the index
    //  i++;
     //y cycles the array
    //  y++;
    //  if(y==shuffle.length){
    //    y=0;
  
