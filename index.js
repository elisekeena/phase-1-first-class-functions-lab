// Code your solution in this file!
const drivers = ["Ted", "Bob","Bill", "Chris"]

// function returnFirstTwoDrivers (){
    // const returnFirstTwoDrivers = function(drivers){
    //     return drivers.slice(0, 2)
    const returnFirstTwoDrivers = function(drivers){
        return drivers.slice (0,2)
    }

    // };
    const returnLastTwoDrivers = function (drivers){
        return drivers.slice(-3, -1 )
    }
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(returnFirstTwoDrivers(drivers)) 
