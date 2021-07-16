export default [

    {
        name: "Force",
        tex: "F = ma",
        variables: [
            ["m", "mass"],
            ["a", "acceleration"]
        ],
        return: ["Force", "F"],
        compute: (m,a) => { return m*a }
    }

]