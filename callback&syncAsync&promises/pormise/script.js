// promise => promise yek function hia jo ki leta hai yek aur function parameter and prameter function leta hai 2 paramiters 1.resolve 2.reject. promise ke sath ne keyword ka use krte hai aur isko sbko kisi naye variabal me store krte hai .





let pro= new Promise(function(res,rej){
setTimeout(()=> {
    let num = Math.floor(Math.random()*10);
    if(num>5) res("resolve work "+ num);
    else rej("reject work "+ num);
    
},1000)
});


// pro.then(function(val){
    
//     console.log(val);
// }).catch(function(val){
//     console.log(val)
// });




// promise with try and catch ,async,await

async function abc(){
    
    try {
        let vel = await pro;
        console.log(vel)
    } catch (error) {
        console.log(error)
    }
}


abc();