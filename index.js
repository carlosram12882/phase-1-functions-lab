function distanceFromHqInBlocks(blocks) {
    return (Math.abs(blocks - 42));
}
function distanceFromHqInFeet(blocks) {
    var feet = distanceFromHqInBlocks(blocks) * 264;
    return feet
}
function distanceTravelledInFeet(start, destination) {
    start = distanceFromHqInFeet(start);
    destination = distanceFromHqInFeet(destination);
    return Math.abs(start - destination)
}
function calculatesFarePrice(start, destination) {
    var fare = distanceTravelledInFeet(start, destination)
    
    if (fare < 400) {
        return 0
    }
    if (fare > 400 && fare < 2000) {
        return ((fare - 400) * 0.02)
    }
    if (fare > 2000 && fare < 2500) {
        return 25
    }
    if (fare > 2500) {
        return 'cannot travel that far'
    }
}