const add = require("./calculator");

it ("Should return zero on an empty string", () => {
	expect(add("")).toBe(0);
}); 

it ("Should return string if one number is in string", () => {
	expect(add("5")).toBe(5);
}); 

it ("Should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
}); 
