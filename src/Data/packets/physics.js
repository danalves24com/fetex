export default [

    {
        name: "Force",
        tex: "F = ma",        
        variables: [
            {
                sign: "m",
                name: "mass"
            },
            {
                sign: "a",
                name: "acceleration"
            }
        ],
        return: ["force", "F"],
        compute: function(v) { return v[0]*v[1] }
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
        return: ["mass", "m"],
        compute: function (v) { return v[0]/v[1] }
    }

]