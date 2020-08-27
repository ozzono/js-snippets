const list=new Array(
    { desc:1, id:0,next:0 },
    { desc:2, id:0,next:0 },
    { desc:3, id:0,next:0 },
    { desc:4, id:0,next:0 },
    { desc:5, id:0,next:0 },
);
var id=0;
for (let i = 0; i < list.length; i++) {
    list[i].id=id++;
    if( id===list.length-1 ){
        list[i].next=0
    }else{
        list[i].next=id
    }
}
console.log(list)