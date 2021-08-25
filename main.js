var canvas = new fabric.Canvas('canvas')
blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(get_image)
{
	fabric.Image.formURL(get_image,function(Img)
	{
		blockImageObject = Img;
		blockImageObject.scaleToWidth(blockImageObject);
		blockImageObject.scaleToHeight(blockImageObject);
		blockImageObject.set(
			{
				top:blockY,
				left:blockX
			});
		canvas.add(blockImageObject);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		newImage('rr1.png');
		console.log("Fortnite almost dead");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		newImage('gr.png');
		console.log("Minecraft is booming");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		newImage('yr.png');
		console.log("DarkViperAU is gonna finish OHKO is 2 weeks...hopefully");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		newImage(pr.png);
		console.log("sussy baka");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		newImage(br.png);
		console.log("WhiteHatjr PLEASE LEARN the NAME of Minecraft blocks...ATLEAST");
	}
	
}

