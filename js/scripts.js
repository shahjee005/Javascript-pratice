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
 *
 */
var myArrayOfDateTypes=[
    //Booleans:
    true,
    false,
    //Null,
    null,
    34,
    168.793,
    //string
    'hello ,World',
    //Value not defined :
    undefined,
    // not a number ; 
    NaN,
    //An array in an array!?
    [1,2,3,4,5]
];

/**
 * Creating elements for a Webpage.
 */

 var myDataList= document.createElement('DL');//(DL mean data list)//it willnot show yet as we didnot tell it where to go.
//lets loop through the array so we don't have to  type out each item!
for (var i=0; i < myArrayOfDateTypes.length; i++)
{//( ASSIGNEMT< TERMINATION CONDITION; ITTERATION)
//create data list title.
var dataListTitle = document.createElement('DT');
dataListTitle.textContent= typeof myArrayOfDateTypes[i];//output the data type.

//create datalist data.
var dataListData= document.createElement('DD');
dataListData.textContent=myArrayOfDateTypes[i];

//Add our new elements to our datalist.
myDataList.appendChild(dataListTitle);
myDataList.appendChild(dataListData);
}
var myHeadingText='Our Data-type text:'
//This is adding HTML to the end of our body .
document.body.innerHTML+= `<!--Back ticks are used in JS for multi-line strings-->
<h2>
    `+myHeadingText/*Concatenating strings!*/+`
    </h2>
    `;
//Add all of that to the body ! yay! We should be able to see it now!
 
document.body.appendChild(myDataList);
/***
 * Collecting elements.
 */
//Get by ID:
var myHeading = document.getElementById('my-heading');
myHeading.title='This is a heading.';//Toltip attribute 
myHeading.style.color= 'darkgrey'; //***Avoide using inline styles****this is teh css files job!!!!
myHeading.className='grey-text'; // use classes instead