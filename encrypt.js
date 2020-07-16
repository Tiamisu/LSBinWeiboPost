var text = "test";

var textBinaryArray = [];
for (i = 0; i < text.length; i++) {
  textBinaryArray[i] = text.charCodeAt(i).toString(2).padStart(16, "0");
}

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
var dataArrayLength = Math.ceil(Math.log2(imageData.length)); //How many bits used for store the text array length.

var tbalts2 = textBinaryArray.length.toString(2);
if (tbalts2.length > dataArrayLength - 4) {
  alert("Exceed Maxmium Length. Please use a larger image");
  console.error();

} else {
  for (i = 0; i < tbalts2.length; i++) {
    imageData[i] = imageData[i] >> 1 << 1 ^ tbalts2[tbalts2.length-i];
  } //write the length of text array into image data
  for (i = tbalts2.length; i < dataArrayLength; i++) {
    imageData[i] = imageData[i] >> 1 << 1;
  } //Other bits are 0

  //write text binary data into the last bits of each pixel
  for (i = 0; i < textBinaryArray.length; i++) {
    for (j = 0; j < 16; j++) {

      imageData[dataArrayLength + i * 16 + j] = imageData[dataArrayLength + i * 16 + j] >> 1 << 1 ^ textBinaryArray[i][j];
    }
  }
}
var encryptData = new ImageData(imageData, image.width)
ctx.putImageData(encryptData, 0, 0);
document.querySelectorAll("img")[1].src = canvas.toDataURL();

