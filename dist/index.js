"use strict";
var addwithAlias = function (n1, n2) {
    if (typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
    return n1.toString() + n2.toString();
};
console.log(addwithAlias(12, 45), "with alias ...");
var testarray;
testarray = ["kia", "ali"];
// testarray = ['kia' , 1] --> make run time error();
for (var _i = 0, testarray_1 = testarray; _i < testarray_1.length; _i++) {
    var a = testarray_1[_i];
    console.log(a);
}
//Enum name {NEW, OLD} structure 
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// use enum without value / enum put index az value ;
console.log(person.role);
// if define return type if other type happen this make error 
function addRetrun(n1, n2) {
    return n1 + n2;
}
//union type is to add two or more type to a parameter
// const add = ( input1 : number | string , input2  : number | string)=>{
//     const result = input1 +  input2 ;
//     return result;
// }this make error with + for repair it use 
var add = function (input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
};
console.log(add(2, 6));
//# sourceMappingURL=index.js.map