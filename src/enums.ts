//Enum name {NEW, OLD} structure 
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
  };
  // use enum without value / enum put index az value ;
  console.log(person.role)