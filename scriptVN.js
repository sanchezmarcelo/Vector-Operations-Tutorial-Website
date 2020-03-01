

function main(){
	
	var canvas = document.getElementById('given');
	var ctx = canvas.getContext("2d");
	
	

	if(!canvas){
		console.log('Failed to get the canvas element');
		return;
	}

	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Given: i", 75, 100); 

	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Normalize i", 90, 120); 

	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("(4, -9)", 80, 210); 

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "blue";
	ctx.textAlign = "center";
	ctx.fillText("i", 80, 240); 

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "blue";
	ctx.textAlign = "center";
	ctx.fillText("X", 65, 195); 

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("Y", 95, 195); 

	ctx.beginPath();
	ctx.moveTo(120, 150);
	ctx.lineTo(150, 250);
	ctx.strokeStyle="blue";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(150, 250);
	ctx.lineTo(140, 245);
	ctx.strokeStyle="blue";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(150, 250);
	ctx.lineTo(155, 240);
	ctx.strokeStyle="blue";
	ctx.stroke();

	ctx.font = "14px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("Not Normalized", 180, 160); 

	ctx.font = "14px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("(longer than one)", 190, 175); 
}

	
