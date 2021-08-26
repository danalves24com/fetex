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
        },
        {
            name: "Population Mean",
            tex: "\\temp",
            variables: [
                {
                    sign: "μ",
                    name: "Population Mean"
                }
            ],
            return: ["Population Mean", "μ"],
            compute: function (v) {
                let l = v.split(" ").map((x) => {return parseInt(x, 10)})
                function getMean() {
                    let tempNum = 0
                    let i = 0
                    while(i < l.length) {
                        tempNum += l[i]
                        i++
                    }
                    tempNum /= l.length
                    return tempNum
                }
            }
        }


    ]
