

// //function ke ander this
// function abcd(){
//     let a=10;
//     console.log(this);
// };

// abcd();

// // method ke ander this

// let obj ={
//     name:"abhi",
//     age:20,
//     method:function(){
//         console.log(this);
//     },

// };

// obj.method();


// // event ke ander 

// document.querySelector("h1").addEventListener("click",function(){
//     alert("A clicked");
//     console.log(this);
// });


let obj ={
    name:"abhi",
    age:20,
    };

 
 
//call..function 
    function abc(a,b,c){
    console.log(this.age,a,b,c);
 };

//  abc.call(obj,1,2,3);

// abc.apply(obj,[1,2,3]);

// let fun= abc.bind(obj,1,2,3);
// fun();    