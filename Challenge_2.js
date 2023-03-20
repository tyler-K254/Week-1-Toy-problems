////CHALLENGE 2 Speed Detector (Toy Problem)

// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.


//make a function that
//take speed of car as input
//if speed < 70 console.log ok
// _for every 5 km/s above the speed limit (70), it should give the driverone demerit point and print the total number of demerit points.
//a)identfy each point that the speed adds 5km above limit (70)
//b)Each time speed adds 5km above the speed limit add 1 demerit point
//c)--calculate each time the speed adds 5km above the limit

//

function speedControl(speed){
    let speedLimit = 70;
    let limitAdded5 = 5
    let demeritPoints = 0

    if(speed>speedLimit){
        demeritPoints = (speed-speedLimit)/limitAdded5;
        console.log("Total demerit points " + demeritPoints);
    }else{
        console.log("Ok")
    }

    return demeritPoints;

}
