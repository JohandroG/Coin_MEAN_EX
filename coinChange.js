function coinChange(amount){
    let penny = 1;
    let nickel = 5;
    let dime = 10;
    let quarter = 25;
    let dollar = 100;
    let currentam = amount;

// ---------------------------------
    let dollarsam = 0
    let quartersam = 0
    let dimesam = 0
    let nickelsam = 0
    let pennysam = 0



    function dollars(){
        
        if (dollar <= currentam){
            currentam = currentam - dollar
            dollarsam++
            return dollars()
        }
        else{
            return dollarsam;
        }
    }

    function quarters(){
        if (quarter <= currentam){
            currentam = currentam - quarter
            quartersam++
            return quarters()
        }
        else{
            return quartersam;
        }
    }

    function dimes(){
        if (dime <= currentam){
            currentam = currentam - dime
            dimesam++
            return dimes()
        }
        else{
            return dimesam;
        }
    }

    function nickels(){
        if (nickel <= currentam){
            currentam = currentam - nickel
            nickelsam++
            return nickels()
        }
        else{
            return nickelsam;
        }
    }


    function pennys(){
        if (penny <= currentam){
            currentam = currentam - penny
            pennysam++
            return pennys()
        }
        else{
            return pennysam;
        }
    }

    let result = {};

    if (dollars() != 0){
        result.dollars = dollars();
    }
    if (quarters() != 0){
        result.quarters = quarters();
    }
    if (dimes() != 0){
        result.dimes = dimes();
    }
    if (nickels() != 0){
        result.nickels = nickels();
    }
    if (pennys() != 0){
        result.pennys = pennys();
    }

console.log(result);

}


//-----------------------------------------
coinChange(78)                      //|||||
//-----------------------------------------