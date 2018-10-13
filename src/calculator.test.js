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

it ("Should return sum of three given numbers", () => {
	expect(add("1,2,3")).toBe(6);
}); 

it ("Should return sum of four given numbers", () => {
	expect(add("1,2,3,4")).toBe(10);
}); 

it ("Should return sum of five given numbers", () => {
	expect(add("1,2,3,4,5")).toBe(15);
}); 

it ("Should return sum of six given numbers", () => {
	expect(add("1,2,3,4,5,6")).toBe(21);
}); 

it ("Should handle new lines between numbers ", () => {
	expect(add("1\n2,3")).toBe(6);
}); 

it ("Should handle new lines between numbers ", () => {
	expect(add("1\n2,3\n4,5\n6")).toBe(21);
}); 

it ("Should be invalid ", () => {
	expect(add("1,\n")).toBe(NaN);
}); 

it ("Should be invalid ", () => {
	expect(add("1,\n")).toBe(NaN);
}); 

it ("Throws on negative input", () => {
  function negativeAdd() {
    add("-1,2");
  }
  expect(negativeAdd).toThrowError('Negatives not allowed: -1');
});

it ("Throws on negative input", () => {
  function negativeAdd() {
    add("2,-4,3,-5");
  }
  expect(negativeAdd).toThrowError('Negatives not allowed: -4,-5');
});

it ("Should ignore numbers bigger than 1000 ", () => {
	expect(add("1001,2")).toBe(2);
}); 