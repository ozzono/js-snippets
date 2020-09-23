console.log([
    {a:["a","b"]},
    {a:["b","c"]},
    {a:["d","e"]},
    {a:["b","d"]},
].reduce(
    (output,element)=>{
        return [
            ...output,
            ...element.a.filter(innerEl=>{
                return !output.some(innerOut=>innerOut===innerEl)
            })
        ]
    },[]
))