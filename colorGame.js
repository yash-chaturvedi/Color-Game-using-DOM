var numSquares=6;
var rgb=generateRandomColors(numSquares);
var pickedColor=pickColor();

var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector(".message");
var h1=document.querySelector("h1");
var resetBtn=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");

easyBtn.addEventListener("click",function(){
    // easyBtn.style.border="none";
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    rgb=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(rgb[i]){
            squares[i].style.backgroundColor=rgb[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    rgb=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=rgb[i];
        squares[i].style.display="block";
    }
    h1.style.backgroundColor="steelblue";
});

resetBtn.addEventListener("click",function(){
    messageDisplay.textContent="";
    resetBtn.textContent="New Colors";
    rgb=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=rgb[i];
    }
    h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent=pickedColor;
hardBtn.classList.add("selected");

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=rgb[i];

    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent="Correct";
            colorChange(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetBtn.textContent="Play Again..?";
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}
function colorChange(c){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=c;
    }
}

function pickColor(){
    return rgb[Math.floor(Math.random()*rgb.length)];
}

function generateRandomColors(len){
    var arr = [];
    for(var i=0;i<len;i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}