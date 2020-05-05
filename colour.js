var numsquare=6;
var colors = generateRandomColors(numsquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var body=document.querySelector("body");
var msg=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset")
var colorDisplay=document.querySelector("#colordisp");
var easybtn=document.querySelector("#eBtn");
var hardbtn=document.querySelector("#hBtn");
var btn=document.querySelectorAll(".square");


easybtn.addEventListener("click",function(){
	easybtn.classList.add("clicked");
	hardbtn.classList.remove("clicked");
	numsquare=3;
	colors=generateRandomColors(numsquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	// for(var i=0;i<squares.length;i++ ){
	// 	squares[i].style.backgroundColor=colors[i];
	// }
	for(var i=0;i<squares.length;i++){
		if(colors[i])
		squares[i].style.backgroundColor=colors[i];
		else
			btn[i].style.display="none";
	}



});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("clicked");
	easybtn.classList.remove("clicked");
	numsquare=6;
	colors=generateRandomColors(numsquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	// for(var i=0;i<squares.length;i++ ){
	// 	squares[i].style.backgroundColor=colors[i];
	// }
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		btn[i].style.display="block";
	}

});

reset.addEventListener("click",function(){
	colors=generateRandomColors(numsquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	// easybtn.classList.remove("clicked");
	// hardbtn.classList.remove("clicked");

	for(var i=0;i<squares.length;i++ ){
		squares[i].style.backgroundColor=colors[i];
	}
	
	h1.style.backgroundColor="steelblue";
	msg.textContent="";
	reset.textContent="NEW COLORS!";

});

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++ ){

	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function()
	{
		if(this.style.backgroundColor===pickedColor)
			{
				
				// body.style.backgroundColor=pickedColor;
				h1.style.backgroundColor=pickedColor;
				msg.textContent="CORRECT";
				reset.textContent="PLAY AGIAN!!";
				changeColors(pickedColor);
			}
		else
			{
				this.style.backgroundColor="#232323";
				msg.textContent="TRY AGAIN";
			}
	});
}

function changeColors(color){
	for(var i=0;i<squares.length;i++ ){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr =[]

	for(var i = 0; i<num ;i++){
		arr[i]=randomColor();

	}

	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// function randomColor(){
// 	var r=math.floor(math.random() * 256);	
// 	var g=math.floor(math.random() * 256);
// 	var b=math.floor(math.random() * 256);

// 	return "rgb(" + r + "," + g + "," + b + ")";
// }
