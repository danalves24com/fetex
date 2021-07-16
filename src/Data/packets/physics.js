export default [

    {
        name: "Force",
        tex: "F = ma",
        variables: [
            ["m", "mass"],
            ["a", "acceleration"]
        ],
        compute: (m,a) => { return m*a }
    }

]