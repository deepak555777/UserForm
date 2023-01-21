import React,{useState} from 'react'
import Classes from './AddUser.module.css';
import Card from './UI/Card'
import Button from './UI/Button'

function AddUser(props) {
    const [userName, setuserName] = useState('')
    const [userAge, setuserAge] = useState('')
    const UserNameHandler=(event)=>{
      setuserName(event.target.value)
    }
    const UserAgeHandler=(event)=>{
        setuserAge(event.target.value)
      }

      const SubmitHandler=(e)=>{
         e.preventDefault();
         props.User(userName,userAge);
      }

      

  return (
    <Card className={Classes.input} >
        <form  onSubmit={SubmitHandler}>
            <label>Username</label>
            <input 
            type="UserName"
            onChange={UserNameHandler}
            value={userName}
            ></input>
            <label>UserAge</label>
            <input 
            type="UserAge"
            onChange={UserAgeHandler}
            value={userAge}
            ></input>
        <Button type="submit" >Add User</Button>

        </form>
        </Card>
  )
}

export default AddUser