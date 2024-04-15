// PROJECT1 (COLOR FLIPPER PROJECT)
// HTML & CSS PART


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Color Flipper</title>
   <style>
       #green{
        background-color: green;
       }
       #red{
        background-color: red;
       }
       #blue{
        background-color: blue;
       }
       button{
        border-radius: 5px;
        width: 100pxs;
        height: 40px;
        margin: 5px;
       }
   </style>
</head>
<body>
    <h3>Color Flipper</h3>
    <button id='green' onclick="setColor('green')">Green</button>
    <button id='red' onclick="setColor('red')">Red</button>
     <button id='blue' onclick="setColor('blue')">Blue</button>
      <button id='random' onclick="randomColor()">Random</button>


  <script src="project1.js"></script>
</body>

</html> 




// JAVASCRIPT PART FOR (COLOR FLIPPER)



const body=document.getElementsByTagName('body')[0]
function setColor(name){
	body.style.backgroundColor=name

};

function randomColor(){
  const red=Math.round(Math.random()*255)
  const green=Math.round(Math.random()*255)
  const blue=Math.round(Math.random()*255)

  const color=`rgb(${red},${green},${blue})`
  body.style.backgroundColor=color
};


