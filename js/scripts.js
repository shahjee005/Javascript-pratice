/**
 * Lets try javascript again!
 * Multiline comment!
 * 
 */
//Single line comment!.

//Basic Assignemnt:
var myVariable='38.9587'; //variabe set as string

myVariable = myVariable +5;
console.log(myVariable +5); // opes one of these is a string so plus is concatenating !

myVariable = parseFloat (myVariable);//Floating point number, decimal maintained.
console.log(myVariable);  //its now a numeric value 

myVariable= parseInt (myVariable); //converted into interger, decimal removed.
console.log(myVariable); //38

myVariable = Number(myVariable); //converted to any number type it can .
console.log(myVariable); //No change here

myVariable= myVariable +5; //Addition.Beaware "+" as it ca add or concatenate , depending on if any oth the operands are string!.
console.log(myVariable);

myVariable= myVariable.toString() //Convert back to a string.
console.log(myVariable);

/***
 * Other types?
 */
