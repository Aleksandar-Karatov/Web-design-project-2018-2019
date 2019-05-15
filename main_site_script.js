var startTime, endTime;
function hoverIn()
{
	startTime = Date.now();
}
function hoverOut()
{	endTime = Date.now();

	var powered=document.getElementById("bottom");
	var timeDiff = endTime - startTime;
	if(endTime-startTime>=1000 && powered.style.color!="white" )
	{
		powered.style.color= "black";
	}
	else
	{
		powered.style.color="white";
	}
}