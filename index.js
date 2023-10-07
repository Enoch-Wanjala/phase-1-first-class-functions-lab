// Code your solution in this file!

    const returnFirstTwoDrivers = function(drivers=["Antonia","Nuru","Amari","Mo"]){
      return drivers.slice(0,2)
}


const returnLastTwoDrivers = function(drivers=["Antonia","Nuru","Amari","Mo"]){
    return drivers.slice(-2)
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
selectingDrivers[returnFirstTwoDrivers()]
selectingDrivers[returnLastTwoDrivers()]

function createFareMultiplier(num){
    return function(){
        return num * 5
    }
}


function fareDoubler(fare){
    const newMutiplier = createFareMultiplier(0.4)
    let doubleFare = (fare * newMutiplier(0.4))
    return doubleFare
}

function fareTripler(fare){
    const newTripler = createFareMultiplier(0.6)
    let tripleFare = fare * newTripler(0.6)
    return tripleFare
}

function selectDifferentDrivers(a,b){
    if(returnFirstTwoDrivers===b){
        return returnFirstTwoDrivers()
    } if(returnLastTwoDrivers===b){
        return returnLastTwoDrivers()
    }
}