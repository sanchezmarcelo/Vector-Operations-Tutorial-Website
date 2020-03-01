

function main(){
	
	var canvas = document.getElementById('given');
	var ctx = canvas.getContext("2d");
	
	var vaCanvas = document.getElementById('vaFirst');
	var vF = vaFirst.getContext("2d");

	var va1Canvas = document.getElementById('vaSecond')
	var va2 = va1Canvas.getContext("2d");

	var va3Canvas = document.getElementById('vaThird');
	var va3 = va3Canvas.getContext("2d");

	if(!canvas){
		console.log('Failed to get the canvas element');
		return;
	}

	ctx.beginPath();
	ctx.moveTo(100,140);
	ctx.lineTo(100, 50);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(100, 50);
	ctx.lineTo(110, 70);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(100, 50);
	ctx.lineTo(90, 70);
	ctx.stroke();

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "blue";
	ctx.textAlign = "center";
	ctx.fillText("Head", 150, 60); 

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "blue";
	ctx.textAlign = "center";
	ctx.fillText("Tail", 145, 150); 

	ctx.beginPath();
	ctx.moveTo(30,250);
	ctx.lineTo(125, 250);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(125,250);
	ctx.lineTo(115, 240);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(125,250);
	ctx.lineTo(115, 260);
	ctx.stroke();

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "blue";
	ctx.textAlign = "center";
	ctx.fillText("U", 80, 240); 

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("V", 200, 240); 

	ctx.beginPath();
	ctx.moveTo(210, 260);
	ctx.lineTo(230, 180);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(230, 180);
	ctx.lineTo(220, 190);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(230, 180);
	ctx.lineTo(235, 200);
	ctx.stroke();

	// 1st canvas

	vF.beginPath();
	vF.moveTo(30,250);
	vF.lineTo(125, 250);
	vF.stroke();

	vF.beginPath();
	vF.moveTo(125,250);
	vF.lineTo(115, 240);
	vF.stroke();

	vF.beginPath();
	vF.moveTo(125,250);
	vF.lineTo(115, 260);
	vF.stroke();

	vF.font = "24px Comic Sans MS";
	vF.fillStyle = "blue";
	vF.textAlign = "center";
	vF.fillText("U", 80, 240); 

	// 2nd canvas

	va2.beginPath();
	va2.moveTo(30,250);
	va2.lineTo(125, 250);
	va2.stroke();

	va2.beginPath();
	va2.moveTo(125,250);
	va2.lineTo(115, 240);
	va2.stroke();

	va2.beginPath();
	va2.moveTo(125,250);
	va2.lineTo(115, 260);
	va2.stroke();

	va2.font = "24px Comic Sans MS";
	va2.fillStyle = "blue";
	va2.textAlign = "center";
	va2.fillText("U", 80, 240); 


	va2.font = "24px Comic Sans MS";
	va2.fillStyle = "red";
	va2.textAlign = "center";
	va2.fillText("V", 150, 240); 

	va2.beginPath();
	va2.moveTo(125, 250);
	va2.lineTo(150, 180);
	va2.stroke();

	va2.beginPath();
	va2.moveTo(150, 180);
	va2.lineTo(155, 190);
	va2.stroke();

	va2.beginPath();
	va2.moveTo(150, 180);
	va2.lineTo(140, 190);
	va2.stroke();

	// 3rd canvas

	va3.beginPath();
	va3.moveTo(30,250);
	va3.lineTo(125, 250);
	va3.stroke();

	va3.beginPath();
	va3.moveTo(125,250);
	va3.lineTo(115, 240);
	va3.stroke();

	va3.beginPath();
	va3.moveTo(125,250);
	va3.lineTo(115, 260);
	va3.stroke();

	va3.font = "24px Comic Sans MS";
	va3.fillStyle = "blue";
	va3.textAlign = "center";
	va3.fillText("U", 80, 240); 


	va3.font = "24px Comic Sans MS";
	va3.fillStyle = "red";
	va3.textAlign = "center";
	va3.fillText("V", 150, 240); 

	va3.beginPath();
	va3.moveTo(125, 250);
	va3.lineTo(150, 180);
	va3.stroke();

	va3.beginPath();
	va3.moveTo(150, 180);
	va3.lineTo(155, 190);
	va3.stroke();

	va3.beginPath();
	va3.moveTo(150, 180);
	va3.lineTo(140, 190);
	va3.stroke();
	va3.closePath();

	va3.beginPath();
	va3.moveTo(30, 250);
	va3.lineTo(150, 180);
	va3.strokeStyle = "#00ff00";
	va3.stroke();

	va3.font = "24px Comic Sans MS";
	va3.fillStyle = "#00ff00";
	va3.textAlign = "center";
	va3.fillText("W", 90, 200); 


}

	
