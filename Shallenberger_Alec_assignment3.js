alert("JavaScript works!");

// Alec Shallenberger
// Febuary 21, 2013
// Term 1302
// SDI-Project 3

// Array
var Restraunts = [
	"Olive Garden",
	"Red Lobster",
	"Stevie B's",
	"Outback Steakhouse"
]
console.log( Restraunts )
var EstimatedPrice = [
	25,
	30,
	15,
	20
]
console.log( EstimatedPrice )
console.log("My four choices of restraunts are " + Restraunts + " ,but I don't know which one I want to go to.")
console.log("The prices for each restraunt in order are " + EstimatedPrice + ".")

// Boolean, Return
var Restraunt = function(name) {
	var EstimatedPrice = (25, 30, 15, 20), 
		Place, Places
	if (EstimatedPrice < 40) { Place = "will try a different restraunt"; }
	else (EstimatedPrice > 40) ;{ Places = "will definitely be eating here tonight!"; }
	Place = "I " + Place + ", if it is to expensive."
	Places = "I " + Places + ", if it is just the right price."
	return Places;
}; 
var PlaceToEat = Restraunt("Olive Garden", "Red Lobster", "Stevie B's", "Outback Steakhouse")
console.log(PlaceToEat);

// Number, While Loop
var EstimatedPrice = 40,
	CashIHave
while (EstimatedPrice > 10) {
	console.log(EstimatedPrice + " dollars is the amount of money I have in my wallet!");
	EstimatedPrice--;
};
console.log("Nice, " + EstimatedPrice + " dollars is the change I have left after paying for dinner." );

// Object, Far Loop
var Restraunts = {
	Names: [ 
		"Olive Garden",
		"Red Lobster",
		"Stevie B's",
		"Outback Steakhouse"
	],
	Prices: [
		25,
		30,
		15,
		20
	],
};
var key = "Names";
console.log( Restraunts[key] );
console.log( Restraunts.Prices );

for (var key in Restraunts) {
	console.log("Names: " + Restraunts[key] );
};





	



