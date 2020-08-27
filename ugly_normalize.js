// "test test".normalize("NFD").replace(/[^a-zA-Zs]/g, "")
console.log("testç tést".split(" ").reduce((output,item)=>{
    return [...output,item.normalize("NFD").replace(/[^a-zA-Zs]/g, "")]
},[]).join(" "))