

function main(){
	
	var canvas = document.getElementById('given');
	var ctx = canvas.getContext("2d");
	
	var vaCanvas = document.getElementById('vaFirst');
	var vF = vaFirst.getContext("2d");

	if(!canvas){
		console.log('Failed to get the canvas element');
		return;
	}

	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Given W = V * U", 80, 100); 
	ctx.beginPath();
	ctx.moveTo(30,250);
	ctx.lineTo(125, 250);
	ctx.stroke();

	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Find W", 45, 120); 

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
	ctx.moveTo(150,250);
	ctx.lineTo(245, 250);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(245,250);
	ctx.lineTo(235, 240);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(245,250);
	ctx.lineTo(235, 260);
	ctx.stroke();


	// 1st canvas


	vF.beginPath();
	vF.moveTo(30,250);
	vF.lineTo(150, 250);
	vF.stroke();

	vF.font = "24px Comic Sans MS";
	vF.fillStyle = "#00ff00";
	vF.textAlign = "center";
	vF.fillText("W", 140, 240); 

	vF.beginPath();
	vF.moveTo(150,250);
	vF.lineTo(245, 250);
	vF.stroke();

	vF.beginPath();
	vF.moveTo(245,250);
	vF.lineTo(235, 240);
	vF.stroke();

	vF.beginPath();
	vF.moveTo(245,250);
	vF.lineTo(235, 260);
	vF.stroke();

	// 2nd canvas
}

	
