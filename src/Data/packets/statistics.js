export default

    [


        {
            name: "Variance",
            tex: "\\sigma^{2} = s^{2}",
            variables: [
                {
                    sign: "s",
                    name: "standard deviation"
                }
            ],
            return: ["variance", "sigma^2"],
            compute: function (v) { Math.pow(v[0],2) }
        }


    ]