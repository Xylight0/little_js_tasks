// Implicit and Explicit Binding

let obj = {
  name: "JS",
  display: function () {
    console.log(this.name);
  },
};

var obj1 = {
  name: "TS",
};

obj.display(); // Output: JS
obj.display.call(obj1); // Output: TS

/***********************************************/

let obj3 = {
  name: "JS",
  display: () => { //arrow function pointing towards global/window object
    console.log(this);
  },
};

var obj4 = {
  name: "TS",
};

obj3.display(); // Output: {}
obj3.display.call(obj4); // Output: {}
