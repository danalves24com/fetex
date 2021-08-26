var physicsLegend = {
    mass: "Kg",
    force: "N",
    acceleration: "d/t",
    thrust: "N",
    mass_flow_rate: "kg/s",
    exit_velocity: "d/t",
    exit_pressure: "kPa",
    free_stream_pressure: "kPa",
    exit_area: "a^2"


}
var statisticsItems = [
    "Standard Deviation",
    "Mean",
    "Sample Size",
    "Variance",
    "Dataset",
]



// helpers
var physicsRef = () => {
    var ls = {};
    for (var i in physicsLegend) {
        ls[i] = i;
    }
    return ls
}
var physicsItems = () => {
    var ls = [];
    for (var i in physicsLegend) {
        ls.push(i);
    }
    return ls
}


export {
    physicsLegend,
    physicsItems,
    statisticsItems,
    physicsRef
}
