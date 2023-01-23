import React,{useState} from 'react';
import AddUser from './Components/AddUser'
import UserList from './Components/UserList'


function App() {
const [Users,setusers] = useState([])

const handleUserData=(userName,userAge)=>{
  setusers((prevUsers)=>{
    
    return [
      ...prevUsers,
      {name:userName,age:userAge},
    ]
  
  })
  console.log(Users);
}

  return (
    <div>
    <AddUser User={handleUserData}/>
    <UserList users={Users}/>
    </div>
  );
}

export default App;
