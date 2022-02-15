function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

a(); //Output: 0 1 2

function b() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

b(); //Output: 3 3 3
