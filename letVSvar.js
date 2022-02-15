{
  var a = "world";
}
console.log(a); //Ouptut: world

{
  let b = "world";
}
console.log(b); //Ouptut: b is not defined

{
  const c = "world";
}
console.log(c); //Ouptut: c is not defined

let d = 5;
let d = 10; //Output: Identifier 'd' has already been declared

const e = 5;
const e = 10; //Output: Identifier 'e' has already been declared

const e = 5;
e = 10; //Output: Assignment to constant variable.

var f = 5;
var f = 10; //Output: *No Output = Working*
