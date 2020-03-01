

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
	ctx.fillText("Given: i * j", 75, 100); 

	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("Find the cross product", 120, 120); 

	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("(a1, a2, a3)", 80, 210); 

	ctx.font = "16px Comic Sans MS";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.fillText("(b1, b2, b3)", 200, 210); 
	

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "blue";
	ctx.textAlign = "center";
	ctx.fillText("i", 80, 240); 

	ctx.font = "24px Comic Sans MS";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("j", 200, 240); 
}

	
