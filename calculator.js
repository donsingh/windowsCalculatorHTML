var operate;

function addButton(num)
{
	var init = document.getElementById("target").innerHTML;
	if(parseFloat(init)==0){
		document.getElementById("target").innerHTML = num;
	}else{
		document.getElementById("target").innerHTML += num;
	}

}
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
		document.getElementById("target").innerHTML = ans;
		document.getElementById("preview").innerHTML = "";
		document.getElementById("operation").innerHTML = "";
	}
}
