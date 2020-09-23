function upperFirst(val){
    if (typeof val !=="string") return undefined
    return val.charAt(0).toUpperCase() + val.slice(1)
}
console.log(upperFirst("brubbles"))