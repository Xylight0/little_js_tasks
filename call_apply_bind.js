const person = {
  name: "Harry Potter",
  hello: function (param) {
    console.log(this.name + " says hello " + param);
  },
};

const alterEgo = {
  name: "Lord Voldemort",
};

person.hello("world!"); //Output: Harry Potter says hello world!
person.hello.call(alterEgo, "world!"); //Output: Lord Voldemort says hello world!
person.hello.apply(alterEgo, ["world!"]); //Output: Lord Voldemort says hello world!
const newHello = person.hello.bind(alterEgo);
newHello("world!"); //Output: Lord Voldemort says hello world!
