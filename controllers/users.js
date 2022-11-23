import { v4 as uuidv4 } from 'uuid';
let users = []
export const createUser = (req,res)=>{

    const user = req.body; 
   //  res.send(element);
    const userId={ ...user , id:uuidv4() };
    users.push(userId);
   
    res.send(`User with name ${user.firstName} ${user.lastName} added !`);
}

export const foundUser = (req,res)=>{
    // --> /users/2 => req.params = {id : 2}
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);
}

export const getUser = (req,res) =>{
    res.send(users);
   res.send(`User's page!`);
  }

export const deleteUser = (req,res) =>{
    const { id } = req.params;
  
    users = users.filter((user)=> user.id !== id);
  
    res.send(`User with id ${id} is deleted!`);

}

export const UpdateUser =(req,res) =>{
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;
   
    const UpdateUser = users.find((user) => user.id===id);
   
    if(firstName) UpdateUser.firstName = firstName;
    if(lastName) UpdateUser.lastName = lastName;
    if(age) UpdateUser.age = age;
   
    res.send(`User with id ${id} updated!`);
   
}