# FETEX [EF-ET-EX]
Given this I want that, Fetex can help you with that

!much refactoring coming soon!

## Equations structre
```
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
    }
```


## How to contribute?
If you would like to add an equation to Fetex, simply go to src/Data/packets and select the field. In the file of your field enter the equation in the format mentioned above.
