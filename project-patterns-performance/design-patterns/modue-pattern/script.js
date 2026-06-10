


// module-patterns => module pattern me hm varibals aur functon ko private rakhte hai. aur jo chahiye sirf vahi return krte hai .


// iife() => module-partterns me hm iife ka use krte hai.


let bank=(function(){
    
    let bankbalance = 0;
    
    function deposit(val) {
        bankbalance +=val;
        console.log("sucess");

    }
    function withdraw(val) {
        if(bankbalance>=val){
            bankbalance -= val;
        }else{
            console.log("balance low");
        }
        }
        function checkbalance(params) {
            console.log(bankbalance);
        }
        
        // return {
        //     deposit,
        //     withdraw,
        //     checkbalance,
        // };

        // revealing module pattern.
        return {
           set: deposit,
           get: withdraw,
           cheack: checkbalance,
        };
        




})();



