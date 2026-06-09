// object banane ke liye sbse pahle object blueprint banavo then instense create karo.agr koi bhi proparty sabhi instanses ke liye same rahne vali ho to use constructor ke prototype me dal do




function Createpen(name,color,company){
    
    this.name=name;
    this.color=color;
    this.company=company;

}
Createpen.prototype.write = function(){
    let h1=document.createElement("h1");
    h1.textContent=this.name;
    h1.style.color=this.color;
    document.body.appendChild(h1);
};




let pen1= new Createpen("dotpen","blue","doms");
let pen2= new Createpen("dotpen","black","doms");
   