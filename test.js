//Creating a chart here.
var canvas = document.getElementById('myChart');
//
var data = {
  labels: ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'unicorn', 'water_can', 'wine_glass'],
  datasets: [
    {
      label: 'iew Clickage',
      fillColor: 'gba(255,20,147,0.8)', // colorDarkPink fills in bar
      strokeColor: 'gba(255,255,0,0.8)', // outline of bar, yellow
      highlightFill: 'gba(220,220,220,0.8)',
      highlightStroke: 'gba(255,165,0,1)', //changed color, to orange. but NOT seeing change.
      scaleGridLineColor: 'gba(255,69,0,0.5)',      //Colour of the grid lines, Added these/
      scaleGridLineWidth : 8, // added this after.
      scaleFontFamily: '"Helvetica Neue, Helvetica, Arial, sans-serif', //no changes
      scaleFontSize: 20, // no changes :(
      data: [],
    }
  ]
};

function buildData(){
  data.datasets[0].data = [];  // helps remove reholding or populating. allProduct data eacch time.
  for(var i = 0; i < allProducts.length; i ++) {
    data.datasets[0].data.push(allProducts[i].tally);
  }
  var context = document.getElementById('myChart').getContext('2d');
  var myBarChart = new Chart(context).Bar(data);
}

canvas.onclick = function(event){
  var activebars = myBarChart.getBarsAtEvent(event);
};

/*Create one array to hold allProduct objects */
var allProducts = [];

/*Create one array to hold the string name values of each image */
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'unicorn', 'water_can', 'wine_glass'];
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
  totalClicks: 0,
  leftObj: null,
  midObj: null,
  rightObj: null,
  buttonResult: document.getElementById('results'),

  leftEl: document.getElementById('imgOne'),
  midEl: document.getElementById('imgTwo'),
  rightEl: document.getElementById('imgThree'),

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
    console.log(productRank.totalClicks);
    if (productRank.totalClicks % 15 === 0) {
      productRank.buttonResult.hidden = false;
    } else {
      productRank.buttonResult.hidden = true;
    }
  }
};

productRank.buttonResult.addEventListener('click', function(){
  buildData();
});


//
// function testLocalS() {
// if (localStorage.data) {
//     console.log("data exist")
//   } else {
//     console.log("its a trap!")
//   }
// }
// localStorage.setItem("key", value);





// function store() {
//   var dataStore = getElementById("data");
//   localStorage.setItem("", data.value);
// }
// function get() {
//   var xxx = document.getElementById('?').value
//   xxx = localStorage.getItem("")
// }





/* This is one of 3 event listeners you will need to write, which listens for clicks on each element */
// Building a function that will add up all the tayllyVotes for each obj/img
///Increment the object's tally property and productRank's total clicks by 1
//call the displayImages method to reroll three new images.
//DONT TRISH 85- 93 (aka delete, accidentally)

//eventListener 1
productRank.displayImages();

productRank.leftEl.addEventListener('click', function(){
  productRank.leftObj.tally += 1;
  productRank.totalClicks += 1;
  productRank.displayImages();
  productRank.showResults();
  buildData();
  console.log(data.datasets[0].data);

});

//eventListener 2
productRank.midEl.addEventListener('click', function(){
  productRank.midObj.tally += 1;
  productRank.totalClicks += 1;
  productRank.displayImages();
  productRank.showResults();
});

// //eventListener 3
productRank.rightEl.addEventListener('click', function(){
  productRank.rightObj.tally += 1;
  productRank.totalClicks += 1;
  productRank.displayImages();
  productRank.showResults();

});


//test if localStorage exists?

    //if yes: use to make allProducts []

//if no: buildAll() to make allProducts[]





 // COPY AND PASTED THIS to save how it was originally written. I plan on playing around with the colors of it.
 // var data = {
 //     labels: ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "unicorn", "water_can", "wine_glass"],
 //     datasets: [
 //         {
 //            label: "View Clickage",
 //             fillColor: "rgba(220,220,220,0.5)",
 //             strokeColor: "rgba(220,220,220,0.8)",
 //             highlightFill: "rgba(220,220,220,0.75)",
 //             highlightStroke: "rgba(220,220,220,1)",
 //             data: []
 //         }
 //     ]
 // };


///notes from class today
//button was id of show results.
// onClick: function() {
//   if(event.target.id === productRank.leftObj.name || event.target.id === productRank ... productRank.tallyClicks.tallyClicks(event.target.id);
//
//     if(productRank.totalClicks % 15 === 0) {
//       productRank.showButton();
//     }
//     productRank.displayImages();
//     } else {
//     console.log("Click the image idiot!")
//     }
//   }
// };
// this is reccomended modernizer
//
// if (Modernizr.localstorage) {
//   // window.localStorage is available!
// } else {
//   // no native support for HTML5 storage :(
//   // maybe try dojox.storage or a third-party solution
// }
