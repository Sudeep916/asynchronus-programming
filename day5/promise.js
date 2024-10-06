console.log('script start');

setTimeout(() => {
    console.log('Timeout Callback');
},0);

Promise.resolve().then (() =>{
    console.log('Promise callback');
});

console.log('Script end');