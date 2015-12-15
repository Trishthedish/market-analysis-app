/*Create one array to hold allProduct objects */
var allProducts = [];

/*Create one array to hold the string name values of each image */
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'unicorn', 'water_can', 'wine_glass' ] //
//lacking: "sweep.png", "usb.gif",


/*Object Constructor Notation: (Many instances of an Object.) Define any paramaterized properties & any fixed value properties.*/
function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  this.views = 0;
  allProducts.push(this);  //will push each object to the allProducts array
}

/*For each element of the productNames array(line5), Create new instances of an object by concatenating strings and using the productNames values. */
//One error found & corrected: images path changed to 'images/'
(function buildAlbum() {  // creating objects, using IIFIE
  for (var i = 0; i < productNames.length; i ++) {
    new Product(productNames[i], 'images/' + productNames[i] + '.jpg');
    }
})();

/* Object Literal Notation (Singular instance of an Object. Set the properties & values for the data you want to track; totalClicks, product objects, and html elements. )*/
 var productRank = {
  //  tallyVotes: function(){
  //    return totalClicks =
  //  }
   totalClicks: 0,
   leftObj: null,
   midObj: null,
   rightObj: null,

   leftEl: document.getElementById("imgOne"),
   midEl: document.getElementById("imgTwo"),
   rightEl: document.getElementById("imgThree"),

/* Get a random number b/n 0 and the length of your productNames array(line5)*/
   getRandomIndex: function() {
     return Math.floor(Math.random() * productNames.length);
   },

/* Get three random objects and assign them to the object properties for each of the three you've already defined.*/
   displayImages: function() {
    this.leftObj = allProducts[this.getRandomIndex()];
    this.midObj = allProducts[this.getRandomIndex()];
    this.rightObj = allProducts[this.getRandomIndex()];

/*if('There are any duplicate image objects assigned') {
//Reroll the displayImages method.} */
if (this.leftObj === this.midObj || this.leftObj === this.rightObj || this.midObj === this.rightObj) {
    this.displayImages();
}
/*Assign & src and id each element using path & name of each related object */
    productRank.leftEl.src = productRank.leftObj.path;
    productRank.leftEl.id = productRank.leftObj.name;

    productRank.midEl.src = productRank.midObj.path;
    productRank.midEl.id = productRank.midObj.name;

    productRank.rightEl.src = productRank.rightObj.path;
    productRank.rightEl.id = productRank.rightObj.name;

  },

/* //('there is no remainder when dividing the total clicks by 15)
        //use the hidden attribute of the button to show/hide
        //Trish: spend time with this */
    showResults: function() {
    var buttonResult = document.getElementById("results");
      if (totalClicks % 15 === 0) {
        buttonResult.hidden = false;
    } else {
      buttonResult.hidden = true;
    }
  }
};

/* This is one of 3 event listeners you will need to write, which listens for clicks on each element */
//eventListener 1
// Building a function that will add up all the tayllyVotes for each obj/img


productRank.leftEl.addEventListener('click', function(){
//Increment the object's tally property and productRank's total clicks by 1
// This is where the chunk of code will needed be extended trish. Things are being tracked by usign them to display results is a bit harder to implement. 
// for (var i = 0; i < productNames.length; i ++) {
//
//   }

  productRank.leftObj.tally +=1;
  productRank.totalClicks += 1;
  productRank.displayImages();
});

//eventListener 2
// productRank.midEl.addEventListener('click', function("imgTwo"){
//    productRank.midObj.tally +=1;
//    productRank.totalClicks += 1;
//    productRank.displayImages();
// });
// //
// //eventListener 3
// productRank.rightEl.addEventListener('click', function(){
//   productRank.tallyVotes();
//   productRank.rightObj.tally +=1;
//   productRank.totalClicks += 1;
//
// //call the displayImages method to reroll three new images.
//  });

productRank.displayImages();

// productRank.leftEl.addEventListener('click', function() { // must repeat this 2 more times.
//   //productRank.tallyVotes();
//   productRank.leftObj.tally += 1;
//   productRank.totalClicks += 1;
//   productRank.displayImages();







// function tallyVotes();
// productRank.leftObj.tally += 1;
// productRank.totalClick +=1;
// productRank.displayImages();
//
// productRank.midObj.tally += 1;
//
// product.rightObj.tally += 1;
