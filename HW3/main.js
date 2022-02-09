function storyFunction(choice) {
  var answer1 = document.getElementById("choice1").innerHTML;
  var answer2 = document.getElementById("choice2").innerHTML;
 
  if (choice == 1 && answer1 == "Yes") {
    document.getElementById("story").innerHTML = "You get in the car excited. Do you know the Driver?";
    
    document.getElementById("choice1").innerHTML = "Yes, it's Stan, my co-worker";
    document.getElementById("choice2").innerHTML = "No idea";

  } else if (choice == 2 && answer2 == "No") {
    document.getElementById("story").innerHTML = "You turn around to run away. The suddenly something in your mind says 'Wait!'";
    
    document.getElementById("choice1").innerHTML = "Go ahead and be brave";
    document.getElementById("choice2").innerHTML = "No. Forget that continue running away.";

  } else if (choice == 1 && answer1 == "Yes, it's Stan, my co-worker") {
    document.getElementById("story").innerHTML = "Stan, where did you get this car? Are you really an accountant? What is going on?";
    
    document.getElementById("choice1").innerHTML = "Yes I am Stan the accountant but you can call me Agent 5.";
    document.getElementById("choice2").innerHTML = "No, I'm not. Stan, continues to drive in mysterious silence. Dodging in and out of traffic.";
  
        //stopped here for the night
        //finish story and choices
} else if (choice == 2 && answer2 == "No idea") {    
    document.getElementById("story").innerHTML = "Who are you? Why were you looking for me?";
    document.getElementById("choice1").innerHTML = "Driver keeps you in suspensful silence. Dodging in and out of traffic.";
    document.getElementById("choice2").innerHTML = "The Driver replies, agent 5.";
 
} else if (choice == 1 && answer1 == "Go ahead and be brave") {
    document.getElementById("story").innerHTML = "'No. I'm not an accountant. I will explain later, but I need your help.' Stan, replies.";
    document.getElementById("choice1").innerHTML = "Agree to help";
    document.getElementById("choice2").innerHTML = "No way! Freakout and try to get out of the moving car.";
 

} else if (choice == 2 && answer2 == "No. Forget that. You start running away.") {
    document.getElementById("story").innerHTML = "You are not able to complete this story of chance. Would you like to restart?";
    document.getElementById("choice1").innerHTML = "Yes restart" + "<br>Restart?";
    document.getElementById("choice2").innerHTML = "No quit";

} else if (choice == 1 && answer1 == "Yes I am Stan the accountant but you can call me Agent 5.") {
    document.getElementById("story").innerHTML ="Agent 5 takes to far from the city. You are not in custody of an Alien race from a far off plant. Would you like to restart?" + "<br>Restart?";
    document.getElementById("choice1").innerHTML = "Yes restart";
    document.getElementById("choice2").innerHTML = "No quit";
  } else if (choice == 2 && answer2 == "Stay clear") {
    document.getElementById("story").innerHTML = "Pugster decides staying away is the best option" + "<br>Restart?";
    document.getElementById("choice1").innerHTML = "Yes restart";
    document.getElementById("choice2").innerHTML = "No quit";
  
} else if (choice == 1 && answer1 == "Agree to help") {
    document.getElementById("story").innerHTML = "Pugster decides that swimming sounds most fun" + "<br>Restart?";
    document.getElementById("choice1").innerHTML = "Yes restart";
    document.getElementById("choice2").innerHTML = "No quit";
  } else if (choice == 2 && answer2 == "Freakout and try to get out of the moving car.") {
    document.getElementById("story").innerHTML = "Pugster decides it's time to drink" + "<br>Restart?";
    document.getElementById("choice1").innerHTML = "Yes restart";
    document.getElementById("choice2").innerHTML = "No quit";
 
} else if (choice == 1 && answer1 == "Yes it will work") {
    document.getElementById("story").innerHTML = "Pugster thinks, yeah this will work out." + "<br>Restart?";
    document.getElementById("choice1").innerHTML = "Yes restart";
    document.getElementById("choice2").innerHTML = "No quit";
  } else if (choice == 2 && answer2 == "No it will not work") {
    document.getElementById("story").innerHTML = "Pugster thinks, I don't think this will work out." + "<br>Restart?";
    document.getElementById("choice1").innerHTML = "Yes restart";
    document.getElementById("choice2").innerHTML = "No quit";

} else if (choice == 1 && answer1 == "Watch from afar") {
    document.getElementById("story").innerHTML = "Pugster decides it's time to just watch from a distance for safety." + "<br>Restart?";
    document.getElementById("choice1").innerHTML = "Yes restart";
    document.getElementById("choice2").innerHTML = "No quit";
  } else if (choice == 2 && answer2 == "Get in closer") {
    document.getElementById("story").innerHTML = "Pugster decides to get just a little closer, but not engage." + "<br>Restart?";
    document.getElementById("choice1").innerHTML = "Yes restart";
    document.getElementById("choice2").innerHTML = "No quit";

} else if (choice == 1 && answer1 == "Yes restart") {
    document.getElementById("story").innerHTML = "Our fearless leader, 'Pugster' has entered the dog park for the first time. Scared? Yes, but willing to give it a try. Are you ready to start on adventure with Pugster?";
    document.getElementById("choice1").innerHTML = "Yes";
    document.getElementById("choice2").innerHTML = "No";
  } else if (choice == 2 && answer2 == "No quit") {
    document.getElementById("story").innerHTML = "Join Next Time! Thanks for playing!";
  }
}
