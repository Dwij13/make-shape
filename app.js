var button = document.getElementById("button");
var num = 1;
var lastshape = 0;

button.onclick=()=>{
  var n = document.getElementById("number").value;
  var circle =document.getElementById("circle").checked;
  var rectangle =document.getElementById("rectangle").checked;
  var square =document.getElementById("square").checked;
  var tot = Number(lastshape) + Number(n);
  for (let i = num;i<=tot;i++){
  var box = document.getElementById("box");
  var shape = document.createElement("div");
  
  shape.innerHTML = num;
  
  if (square==true){
  shape.classList.add("square");
} else if (circle==true) {
  shape.classList.add("circle");
} else if (rectangle==true) {
  shape.classList.add("rectangle");
}

box.append(shape)
num++;
lastshape=shape.innerHTML;
console.log(lastshape);
}
}