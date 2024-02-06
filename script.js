var nickname = prompt('Please enter your name:');
var height = prompt('Please enter your height in inches:');
var weight = prompt('Please enter your weight in kg:');

height = height/12;
weight = weight* 2.205;
height = Math.round(2.6);
weight = Math.round(2.6);

alert("Name: " + nickname + "\nHeight: " + height + "''" + "\nWeight: " + weight + " lbs");