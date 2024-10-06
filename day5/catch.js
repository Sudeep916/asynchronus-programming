const fetchData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Data Fetched");
        const data ={ id:1 , name: 'john'};
        resolve(data);

    },1000);
});

console.log(fetchData)
fetchData
  .then((data) => {
    throw new Error('Something went wrong');
  })
  .catch((error) => {
    console.error('Caught error:', error.message);
  });