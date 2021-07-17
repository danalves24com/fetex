import { physicsItems, physicsRef, physicsLegend } from "../Units"

export default [

    {
        name: "Force",
        tex: "F = ma",        
        variables: [
            {
                sign: "m",
                name: "mass",                
            },
            {
                sign: "a",
                name: "acceleration"
            }
        ],
        return: [physicsRef().force, "F"],
        compute: function (v) { return v[0] * v[1] + physicsLegend.force }
    },
    {
        name: "Mass",
        tex: "m = \\frac{F}{a}",
        variables: [
            {
                sign: "F",
                name: "force"
            },
            {
                sign: "a",
                name: "acceleration"
            }
        ],
        return: [physicsRef().mass, "m"],
        compute: function (v) { return v[0] / v[1] + physicsLegend.mass }
    },
    {
        name: "Rocket Thrust",
        tex: "F = \\dot{m} V_{e} + (p_{e} - p_{0}) A_{e}",
        variables: [
            {
                sign: "\\dot{m}",
                name:"mass flow rate"
            },
            {
                sign: "V_{e}",
                name: "Exit Velocity"
            },
            {
                sign: "p_{e}",
                name: "Exit Pressure"
            },
            {
                sign: "p_{0}",
                name: "Free Stream Pressure"
            },
            {
                sign: "A_{e}",
                name: "Throat to exit area ration"
            }
        ],
        return: [physicsRef().thrust, "F"],
        compute: (v) => { return (v[0] * v[1] + (v[2] - v[3]) * v[4]) + physicsLegend.thrust }
    }

]