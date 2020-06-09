'use strict';
console.log('reading js');



// listen for the submission of the form
document.getElementById("myform").addEventListener("submit", function(event){
    // prevent the default behavior
    event.preventDefault();

    // get all the text fields from the form
    var formData = document.querySelectorAll("input[type=text]"); //sets the limit for the array
    // create an array to hold values from the form
    var words = []; 

    //loop through the fields and add the words to the array, one at a time.
    for( var i=0; i<formData.length; i++){
        words.push(formData[i].value); //pushes into array   
    }
    //You can see the array in the console
    console.log(words);

    //run a function to put the words into the madlib... Function below...
    //Pass the array of words the user typed into the function
    makeMadLib(words);
    document.querySelector(".form").style.display="none";

});

//This function takes an array input, then constructs the madlib, peppering
//in the user's words where necessary.
function makeMadLib(theWords){
    var madlib = `Saying "All Lives Matter" is like saying ${theWords[0]} lives matter. It's unproductive and unncessary, because ${theWords[0]} lives are not under attack. On top of that, the police in ${theWords[1]} are impartial towards people of color due to deep rooted racial bias enabled by centuries of systemic oppression. ${theWords[2]} doesn't even begin to describe the kind of person that abuses the very people they took an oath to protect and serve. Surveys show the average recruit receives only eight hours of de-escalation training. It likely requires much more training time to become a  ${theWords[3]} than a police officer in ${theWords[1]} - just look it up!
    <img id="leftimage" src ="images/hands.svg">
    `;

    //Get the madlib container
    var mlContainer = document.getElementById('madlib');

    //Change the guts of the container to your madlib
    mlContainer.innerHTML = `<p>${madlib}</p>`; //string literals ` , variable goes inside ${}
    mlContainer.innerHTML = '<p>'+madlib+'</p>';

    //change the class on the madlib container so you can see it.
    mlContainer.setAttribute("class", "visible");
}


