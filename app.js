var numOfImages = 14;

var img = new Array(numOfImages)
img[0] = "images/bag.jpg";
img[1] = "images/banana.jpg";
img[2] = "images/boots.jpg";
img[3] = "images/chair.jpg";
img[4] = "images/cthulhu.jpg";
img[5] = "images/dragon.jpg";
img[6] = "images/pen.jpg";
img[7] = "images/scissors.jpg";
img[8] = "images/shark.jpg";
img[9] = "images/sweep.jpg";
img[10] = "images/unicorn.jpg";
img[11] = "images/usb.gif";
img[12] = "images/water_can.jpg";
img[13] = "images/wine_glass.jpg";

var prodName = img[i];

function mallProduct(prodName,voteClick, totalClicks) {
// could I also just code in three place holders? as in place1,place2, place3? then push the pictures into that?
  this.prodName = prodName;
  this.voteClick = 0;
  this.totalClicks = 0;
}


mallProuct.prototype.randomImg = function() {
  return Math.floor(Math.random() *( 14 - 0 + 0);
}
// Trish could you rename the images so you can cycle through these images? As in img + [1]. Thus, name of images 1, 2,3 etc?


var imgContainer = document.getElementById("container");
userForm.addEventListener('click', picHandler );

function picHandler(event) {
  event.preventDefault();
  var prodName = event.target.prodname.value;
  var voteClick = event.target.voteClick.value;
  var totalClick = event.target.totalClick.value;

}



var img[i] = document.getElementById("img[]");
img[i].addEventListener('click', voteClick);

var img[i] = document.getElementById("container");
img[i].addEventListener('click', voteClick);

var voteClick = 0;
var totalClick = 0;

function voteClick(event) {
  voteClick +=1;
}


function totalClick(event) {
  totalClick += 1;
}
