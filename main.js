var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("h.jpg",function(Img){
imgobject=Img;
imgobject.scaleToWidth("700");
imgobject.scaleToHeight("700");
imgobject.set({
top:0,
left:0
});
canvas.add(imgobject);
});
}

