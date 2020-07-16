
var image = new Image();
image.crossOrigin = "";
image.src = document.querySelectorAll("img")[1].src; //First image in the text
var canvas = document.createElement("canvas");
canvas.width = image.width;
canvas.height = image.height;
var ctx = canvas.getContext('2d');
setTimeout("", 1000)
ctx.drawImage(image, 0, 0);
setTimeout("", 1000)
var imageData = ctx.getImageData(0, 0, image.width, image.height).data;
var dataArrayLength = Math.ceil(Math.log2(imageData.length));

var textArrayLength = 0;
for (i = 0; i < dataArrayLength; i++) {
  textArrayLength += ((imageData[i] & 1) << i);
}

var textArray = [];
textArray.length = textArrayLength;
textArray.fill(0);

for (i = 0; i < textArrayLength; i++) {
  for (j = 0; j < 16; j++) {
    textArray[i] += ((imageData[i*16+15-j+dataArrayLength] & 1) << j);
  }
 textArray[i]=String.fromCharCode(textArray[i])
}
var newText = document.createElement("div")
newText.innerHTML = textArray.join("");
document.getElementsByClassName("content")[0].appendChild(newText);
