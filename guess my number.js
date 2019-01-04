alert(`Hello I am Pinto your gaming instructor.
	 Welcome to 'GUESS MY NUMBER'
	Your NO1 guess game.`);
alert(`Here are the rules
	1. I Pinto will have a number in mind ranging from 0 to 100, and all you are required to do is to guess that number it is. Pretty simple right. Added to that, you will have hints on every question.

	Here's the hard part, the first 5 guesses will range from 0 - 20 with number interval of at least 3 and most 5, after 5 answers you will be required to guess the next answers with options ranging from 50- 100 with number interval of at least 10 and most 15`);
alert("Are you ready");
alert("Lets GO!");
var	score= 0
var number1= prompt("Guess what number i'm thinking of, it's not less than 7 nor higher than 10 "); if (Number(number1) === 10) {
	alert("Yes! you got it.")
	score = score + 1;
} else if (Number(number1) < 10) {
	alert("go higher");
} else if (Number(number1) > 10) {
	alert("go lower");
}
var number2= prompt(`This is your second guess. let it count!
	it's not less than 5 nor higher than 9`); if (Number(number2) === 7) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number2) < 7) {
	alert("you should have gone higher");
} else if (Number(number2) > 7) {
	alert("you should have gone lower");
}

var number3= prompt(`This is your third guess. let it count!
	it's not less than 7 nor higher than 11`); if (Number(number3) === 10) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number3) < 10) {
	alert("you should have gone higher");
} else if (Number(number3) > 10) {
	alert("you should have gone lower");
}

var number4= prompt(`Your mind is powerful enough to get it right!
	it's not less than 16 nor higher than 20`); if (Number(number4) === 17) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number4) < 17) {
	alert("you should have gone higher");
} else if (Number(number4) > 17) {
	alert("you should have gone lower");
}

alert("Congratulations! you are now at the advanced level. Take a deep breath.")
alert("ARE YOU READY?");
alert("Lets go!")

var number5= prompt(`Your mind is the most powerful computer in the world. Use it rightly.
	Your guess should not be less than 51 nor higher than 60`); if (Number(number5) === 55) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number5) < 55) {
	alert("you should have gone higher");
} else if (Number(number5) > 55) {
	alert("you should have gone lower");
}


var number6= prompt(`Your mind is the most powerful computer in the world. Use it rightly.
	Your guess should not be less than 65 nor higher than 70`); if (Number(number6) === 66 ) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number6) < 66) {
	alert("you should have gone higher");
} else if (Number(number6) > 66) {
	alert("you should have gone lower");
}


var number7= prompt(`When you put your mind power to work the possibilities are endless.
	Your guess should not be less than 60 nor higher than 81`); if (Number(number7) === 78) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number7) < 78) {
	alert("you should have gone higher");
} else if (Number(number7) > 78) {
	alert("you should have gone lower");
}



var number8= prompt(`When you put your mind power to work the possibilities are endless.
	Your guess should not be less than 59 nor higher than 66`); if (Number(number7) === 64) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number8) < 64) {
	alert("you should have gone higher");
} else if (Number(number8) > 64) {
	alert("you should have gone lower");
}


var number9= prompt(`The more you put your mind to work the more powerful it gets. Put it to work
	Your guess should not be less than 61 nor higher than 77`); if (Number(number9) === 75) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number9) < 75) {
	alert("you should have gone higher");
} else if (Number(number9) > 75) {
	alert("you should have gone lower");
}

var number10= prompt(`This is your last guess let it count!.
	Your guess should not be less than 87 nor higher than 100`); if (Number(number10) === 99) {
	alert("Yes! you got it.")
	score = score + 1;	
} else if (Number(number10) < 99) {
	alert("you should have gone higher");
} else if (Number(number10) > 99) {
	alert("you should have gone lower");
}

alert("Who would have thought that you will come this far. Maybe even you did'nt. But you're here now. Congratulations");
alert("Are you ready to see your score? click 'OK' if yes' ");
alert("Your score is " + score);
alert("Thank you for choosing 'GUESS MY Number'" + "Pinto says byee");
