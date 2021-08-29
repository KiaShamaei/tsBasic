type combine = number | string ;
const addwithAlias = (n1 : combine , n2 : combine)=>{
    if(typeof n1 === "number" && typeof n2 === "number")
    return n1 + n2 
    return n1.toString() +  n2.toString()
}

console.log(addwithAlias(12,45) , "with alias ...")