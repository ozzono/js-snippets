console.log("çá éüã".split(" ").reduce((output,element)=>{
    return [...output,element.normalize("NFD").replace(/[^a-zA-Zs]/g, "")]
},[]))

