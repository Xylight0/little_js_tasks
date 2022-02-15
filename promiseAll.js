function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function myPromiseAll(promises) {
  let result = new Array(promises.length);
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((e, index) => {
      e.then((res) => {
        result[index] = res;
        if (counter === promises.length - 1) resolve(result);
        counter++;
      }).catch((err) => reject(err));
    });
  });
}

myPromiseAll([showText("hello", 100), Promise.resolve("hi")]).then((val) =>
  console.log(val)
);

Promise.all([
  showText("hello", 100),
  Promise.resolve("hi"),
  //Promise.reject("bye"),
]).then((val) => console.log(val));
