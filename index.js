// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const HqAt = 42;
    return Math.abs(HqAt - someValue);
  }

  function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264;
    
    return feetPerBlock * distanceFromHqInBlocks(someValue);
  }

  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(start - destination) * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    let rideNeeded = distanceTravelledInFeet(start, destination);
    let price;

    if (rideNeeded < 400) {
        price = 0;
    } else if (rideNeeded < 2000) {
        price = 0.02 * (rideNeeded - 400);
    } else if (rideNeeded < 2500) {
        price = 25;
    } else price = 'cannot travel that far';
    return price;

  }