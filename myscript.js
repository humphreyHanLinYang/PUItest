let cart = [];
if (sessionStorage.getItem("cart") != null) { //get cart from session storage if it exists
	cart = JSON.parse(sessionStorage.getItem("cart"));
} 
else if(localStorage.getItem("cart") != null){ //get cart from local storage if it exists
	cart = JSON.parse(localStorage.getItem("cart"));
}


cart.push("peach");


function onClickAddFruits() {
	localStorage.setItem("cart", JSON.stringify(cart));

	cart.push("apple");
	cart.push("orange");
	cart.push("banana");
	sessionStorage.setItem("cart", JSON.stringify(cart));
console.log(cart);
}


localStorage.setItem("cart", JSON.stringify(cart));
cart.push("grape");
console.log(cart);