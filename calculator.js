/*
Operate is set to global so addOp() can set the type of operation
and calc() can view inside the same variable (operate) what operation is being done.
1 - Addition
2 - Subtraction
3 - Multiplication
4 - Division

Fields for Resetting in clearAll(); to demonstrate For-In loop
*/

var operate;
var fields = ['target','preview','operation'];

//This function simply adds to the 'screen' any numberical buttons pressed.
function addButton(num)
{
	var init = document.getElementById("target").innerHTML;
	if(parseFloat(init)==0){
		document.getElementById("target").innerHTML = num;
	}else{
		document.getElementById("target").innerHTML += num;
	}

}

/*
Similar to the addButton, but adds the area for operation. 
There is a special div reserved for operation symbols as not to break the formatting.
*/
function addOp(op)
{
	var left = document.getElementById("target").innerHTML;
	left = parseFloat(left);
	document.getElementById("target").innerHTML="";
	document.getElementById("preview").innerHTML=left;
	var sym;
	switch(op){
		case 1:	sym = "+";	break;
		case 2:	sym = "-";	break;
		case 3:	sym = "x";	break;
		case 4:	sym = "&#247;";	break;
		default:break;
	}
	document.getElementById("operation").innerHTML= sym;
	operate = op;
}

function calc()
{
	var a = parseFloat(document.getElementById("preview").innerHTML);
	var b = parseFloat(document.getElementById("target").innerHTML);
	var ans;
	var op;
	if(!isNaN(a) && !isNaN(b)){
		switch(operate){
			case 1:	ans = a+b; break;
			case 2:	ans = a-b; break;
			case 3:	ans = a*b; break;
			case 4:	ans = a/b; break;
			default:break;
		}
		/*
			We can probably skip this whole switch-case if we use (+,-,*,/) instead of numbers and simply tokenize it by saying ans = eval(a+operate+b); but uh... kapoi.
		*/
		document.getElementById("target").innerHTML = ans;
		document.getElementById("preview").innerHTML = "";
		document.getElementById("operation").innerHTML = "";
	}
}

function clearAll()
{
		for(var i in fields){
			document.getElementById(fields[i]).innerHTML = "";
		}
		document.getElementById("target").innerHTML = 0;
}
