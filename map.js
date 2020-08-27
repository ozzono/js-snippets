arr=[1,2,3,4].reduce((output,item)=>{
    output[`item${item}`]=item
    return output
},[])