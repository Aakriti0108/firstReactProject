
import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App(){
  const [UsersList,setUsersList]=useState([]);

  const AddUserHandler = (uName,uAge)=>{
       setUsersList((prevUsersList)=>{
        return [...prevUsersList, {name:uName , age:uAge}]
       })
  }

  return(
    <div>
         <AddUser  onAddUser={AddUserHandler}/>
         <UserList users={UsersList} />
    </div>
  )
}

export default App;