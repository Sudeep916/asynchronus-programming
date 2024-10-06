async function fetchData(){
    try{
        const data = await new Promise((resolve,reject) =>{
            setTimeout(()=>{
                reject('Error fetching data');
            },1000);
        });
        console.log(data);
    }catch(error){
        console.log('Caught an error',error);
    }
}

fetchData();