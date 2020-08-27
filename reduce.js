var test=[
    {name:"a",value:0,total:0},
    {name:"b",value:11,total:0},
    {name:"c",value:22,total:0},
    {name:"d",value:33,total:0},
    {name:"e",value:44,total:0},
]
var total=test.reduce((total,value,i)=>{
    console.log(`${i}:`)
    console.log({total:total})
    return total={
        name:total.name,
        value:total.value,
        total:total.total+parseInt(value.value,10)
    }
})
console.log("## end ##")
console.log({total:total})