const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Failure');

Promise.allSettled([p1, p2])
  .then((result) => {
  console.log(result.status);
  result.map((i)=>{
    console.log(i)
  })
  });
