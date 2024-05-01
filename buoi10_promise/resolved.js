// Promise.resolve() trả về một promise thành côngn

const promise  = Promise.resolve(111);
promise.then((value)=>{
    console.log(value);
})