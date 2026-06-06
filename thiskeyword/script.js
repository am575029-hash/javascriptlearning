

//function ke ander this
function abcd(){
    let a=10;
    console.log(this);
};

abcd();

// method ke ander this

let obj ={
    name:"abhi",
    age:20,
    method:function(){
        console.log(this);
    },

};

obj.method();


// event ke ander 

document.querySelector("h1").addEventListener("click",function(){
    alert("A clicked");
    console.log(this);
});