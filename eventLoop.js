console.log("a");
setTimeout(() => console.log("set"), 0);
Promise.resolve(() => console.log("pro")).then((res) => res());
console.log("b");

// Output: a -> b -> pro -> set
