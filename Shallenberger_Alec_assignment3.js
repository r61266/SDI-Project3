alert("JavaScript works!");

// Alec Shallenberger
// Febuary 21, 2013
// Term 1302
// SDI-Project 3

// Array
var Restaurant = [
	"Olive Garden",
	"Red Lobster",
	"Stevie B's",
	"Outback Steakhouse"
]
console.log( Restaurant )
var EstimatedPrice = [
	25,
	30,
	15,
	20
]
console.log( EstimatedPrice )
console.log("My four choices of restaurants are " + Restaurants + " ,but I don't know which one I want to go to.")
console.log("The prices for each restraunt in order are " + EstimatedPrice + ".")

// Boolean, Return
var Restaurant = function(name) {
	var EstimatedPrice = (25, 30, 15, 20), 
		Place, Places
	if (EstimatedPrice < 40) { Place = "will try a different restaurant"; }
	else (EstimatedPrice > 40) ;{ Places = "will definitely be eating here tonight!"; }
	Place = "I " + Place + ", if it is to expensive."
	Places = "I " + Places + ", if it is just the right price."
	return Places;
}; 
var PlaceToEat = Restaurant("Olive Garden", "Red Lobster", "Stevie B's", "Outback Steakhouse")
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
var Restaurants = {
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
console.log( Restaurants[key] );
console.log( Restaurants.Prices );

for (var key in Restaurants) {
	console.log("Names: " + Restaurants[key] );
};

//String, Return
var EstimatedPrice = function(Cash) {
	var PriceForDinner = 15,
		EachPlate;
	if (Cash < PriceForDinner) {
		console.log("I definitely don't have enough money!");
		return;
	}
	Eachplate = Math.floor(Cash / PriceForDinner);
	return EachPlate;
};

var haveDinner = EstimatedPrice(30);
console.log("I have exactly " + haveDinner + " dollars with me!");

//JSON Data

var json = {
	"Restaurants": [
		{
			"Restaurantname": "Olive Garden",
			"Price": 25
		},
		{
			"Restaurantname": "Red Lobster",
			"Price": 30
		},
		{
			"Restaurantname": "Stevie B's",
			"Price": 15
		},
		{
			"Restaurantname": "Outback Steakhouse",
			"Price": 20
		}
	]
};
var handelData = function(json) {
	for (var i = 0; i < json.Restaurants.length; i++){
		var Restaurant = json.Restaurants[i];
		console.log("Restraunt name: " + Restaurant.Restaurantname + ", Price: " + Restaurant.Price);
		};
};

handelData(json);

//
var jsonstring = JSON.stringify(json);
console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);

	
	
	
	
	
	

	

	









	



