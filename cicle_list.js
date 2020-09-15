const list = new Array(
    {id:0,value:1},
    {id:1,value:1},
    {id:2,value:1},
    {id:3,value:1},
    {id:4,value:1}
)
var id=0
for (let i = 0; i < list.length; i++) {
    if (id===list.length -1){
        list[i].next=0
    }else{
        list[i].next=id+1;
    }
    id++
}
console.log(list.reduce((output,item)=>{
    return [...output,{
        id:item.id,
        next:item.next,
    }]
},[]))
cicle(list,4)
function cicle(list,i) {
    console.log("starting from: "+i)
    var start=list[i]
    var stop=false
    while (!stop) {
        console.log(list[i].id)
        if (start.id===list[i].next){
            stop=true
        }
        i=list[i].next
    }
}