
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width" /> <title>KeyProperty</title>

<style>
#box{
width:100px;
height:100px;
background:green;
}
</style>
</head>
<body>
<div id="box"></div>
script>
var left = 0;
var up = 0; 
document.querySelector("body").addEventListener('keydown', function(e){

//console.clear();
switch(e.key){
case "ArrowRight":
left= left +5;
break;
case "ArrowLeft":
left = left -5;
break;
case "ArrowDown":
up = up +5;
break;
case "ArrowUp"
up = up -5;
break;
default:
console.log("Other key Pressed.")
break;
}

var target = document.querySelector("#box");
target.style.marginLeft = left + "px"; 
target.style.marginTop= up + "px"
</script>
