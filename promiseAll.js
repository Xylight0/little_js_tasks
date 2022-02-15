function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function myPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((e, index) => {
      e.then((res) => {
        result.push(res);
        if (index === promises.length - 2) resolve(result);
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
