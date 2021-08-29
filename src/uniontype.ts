//union type is to add two or more type to a parameter

// const add = ( input1 : number | string , input2  : number | string)=>{
//     const result = input1 +  input2 ;
//     return result;
     
// }this make error with + for repair it use 
const add = (input1 : number | string , input2 : number | string )=>{
    let result;
    if (typeof input1 === 'number' && typeof input2==='number'){
        result = input1 + input2 ;

    }else{
        result = input1.toString() + input2.toString() ;
    }
}


console.log(add(2,6))