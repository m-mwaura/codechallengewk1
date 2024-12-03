//declare function with a parameter that will be used to when calling for the speed
function topSpeed(speed){

//define constants for legal speed limit and points earned when above speed limit
    const speedLimit = 70;
    const pointPerKm = 5;


    if (speed <= speedLimit){//conditional statement to asceratin if statement is true or false hnce returning ok if speed limit is mainatined
        console.log("OK");
    
    } else {
        const points = Math.floor((speed - speedLimit) / pointPerKm);
        // math.floor ensures the reuslts are rounded to the nearest whole number eliminates decimals by rounding off to the nearest interger

        if (points < 12){
            console.log(`points; ${points}`);

        } else {
            console.log("Licence suspened")
        }

    }


}

topSpeed(85)
topSpeed(60)
topSpeed(180)
topSpeed(50)
topSpeed(200)