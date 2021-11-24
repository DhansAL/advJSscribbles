// IIFE - calls itself , cant access from outside iife scope
(first = () => {
  console.log("first func");
})();
// iife old syntax
(function second() {
  console.log("second func");
})();

//scope check IIFE
// lol() , cant call
