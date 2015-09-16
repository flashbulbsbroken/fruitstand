var customerCash = 100;

var applePrice = 5;
var orangePrice = 5;
var bananaPrice = 5;
var pearPrice = 5;

var avgApplePrice = 0;
var avgOrangePrice = 0;
var avgBananaPrice = 0;
var avgPearPrice = 0;

var applesArray = [];
var orangesArray = [];
var bananasArray = [];
var pearsArray = [];

$(document).ready(function(){
	event.preventDefault();

setInterval(newPrice, 3000, "apple");
setInterval(newPrice, 3000, "orange");
setInterval(newPrice, 3000, "banana");
setInterval(newPrice, 3000, "pear");

function newPrice(fruit){
	var myPrice = parseFloat($("." + fruit + "Price").text());
	console.log(myPrice);

	myPrice = myPrice + randomNumber(-50, 50);
		if(myPrice > 9.99){
			myPrice = 9.99;
		}else if(myPrice < 0.01){
			myPrice = 0.01;
		}



	$("." + fruit + "Price").text(myPrice.toFixed(2));
}

function randomNumber(min, max) {

	var num = Math.floor(Math.random() * (1 + max - min) + min);
console.log(num);
	return num/100;

};
});

// applesArray.push(appleNewPrice);

// $('.applesButton').on('click', function(){

// 	$(this).append("<p class=apple>" + applePrice + "</p>");
// 	$(applePrice).show();
	
	// setInterval(applePrice, 3000);

// $('.orangesButton').on('click', function(){
// 	$(".orangesPurchaseButton").show();
// 	$(this).append("<p>" + orangePrice + "</p>");
// 	$(orangePrice).show();
	
// 	orangesArray.push(orangePrice);
//  });

// $('.bananasButton').on('click', function(){
// 	$(".bananasPurchaseButton").show();
// 	$(this).append("<p>" + bananaPrice + "</p>");
// 	$(bananaPrice).show();
	
// 	bananasArray.push(bananaPrice);
//  });

// $('.pearsButton').on('click', function(){
// 	$(".pearsPurchaseButton").show();
// 	$(this).append("<p>" + pearPrice + "</p>");
// 	$(pearPrice).show();
	
// 	pearsArray.push(pearPrice);
//  });