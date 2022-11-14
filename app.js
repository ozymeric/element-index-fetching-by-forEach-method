// how to get the index numbers and the elements of an array together by forEach():

var listItems = ["banana", "orange", "apple", "cherry", "apricot"];

function update() {
  listItems.forEach((item, index) => {
    console.log(index + ":" + item);
  })
}
console.log("How to get index/elements of an array easily by forEach() method:")
update();

console.log("##########################################")

// how to multiply every element of an array by 10:
function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

const numbers = [65, 55, 23, 8];
console.log(numbers);

console.log("##########################################")
console.log("How to multiply every element of an array by 10 by using forEach() method:");
numbers.forEach(myFunction);
console.log(numbers);
