
function distanceFromHqInBlocks(someValue) {
    let blockTotal = Math.abs(someValue - 42); 
    return blockTotal;
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    let feetTotal = distanceFromHqInBlocks(someValue) * 264;
    return feetTotal;
}

function distanceTravelledInFeet(start, destination) {
    let travelledFeet = Math.abs(destination - start) * 264;
    return travelledFeet;
}

function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination);
    let farePriceSet = distanceTravelledInFeet(start, destination);
    if (farePriceSet <= 400) {
        return 0;
    }
    else if (farePriceSet > 400 && farePriceSet <= 2000) {
        let perFoot = 0.02 * (farePriceSet - 400);
        return perFoot;
    }
    else if (farePriceSet > 2000 && farePriceSet <= 2500) {
        let setPrice = 25;
        return setPrice;
    }
    else {
        return "cannot travel that far";
    }
}