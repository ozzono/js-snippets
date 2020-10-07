const arr=[]
for (let i = 0; i < 4; i++) {
    const inarr=[]
    for (let j = 0; j < i; j++) {
        inarr.push(j+1)
    }
    arr.push(inarr)
}
console.log(arr.reduce((out,el)=>{
    return [...out,el.reduce((out)=>[...out,true],[])]
},[]))