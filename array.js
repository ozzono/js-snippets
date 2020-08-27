var arr=[1,2,3,]
console.log(arr.reduce((acc,element)=>{
    return acc=[
        ...acc,
        {
            double:2*element,
            value:element,
        }
    ]
}))