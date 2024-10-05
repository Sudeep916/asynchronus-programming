const fetchData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Data Fetched");
        const data ={ id:1 , name: 'john'};
        resolve(data);

    },1000);
});

console.log(fetchData)
fetchData
    .then((data)=>{
        console.log('Data Recieved',data);
        return data.id;
    })
    .then((id)=>{
        console.log('ID',id);
    })
    .catch((error)=>{
        console.error('Error:',error)
    })