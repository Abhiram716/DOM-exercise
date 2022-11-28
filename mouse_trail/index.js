document.onmousemove = animateCircles;

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);
  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";
  circle.style.transition = "all 0.5s linear";
  let color=changeColors();
  circle.style.backgroundColor=color;
  circle.style.borderColor=color;
  circle.style.left = circle.offsetLeft - 20 + "px";
  circle.style.top = circle.offsetTop - 20 + "px";
  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = "0";
  setTimeout(() => {
    circle.remove();
  }, 1000);
}

function changeColors(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}