// Promise.all(promise1, promise2)
//   .then((results) => {
//   })
//   .catch((error) => {
//   });

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values); // Output: [1, 2, 3]
  })
  .catch((error) => {
    console.error('Error:', error);
  });
