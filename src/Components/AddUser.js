import React,{useState} from 'react'
import Classes from './AddUser.module.css';
import Card from './UI/Card'
import Button from './UI/Button'
import ErrorModal from './UI/ErrorModal'

function AddUser(props) {
    const [userName, setuserName] = useState('');
    const [userAge, setuserAge] = useState('');
    const [error, setError] = useState();


      const SubmitHandler=(e)=>{
         e.preventDefault();
         if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
          if (+userAge < 1) {
            setError({
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0).',
            });
            return;
        }
         props.User(userName,userAge);
         setuserName('');
         setuserAge('');
      }
      const userNameHandler=(event)=>{
        setuserName(event.target.value)
      }
      const userAgeHandler=(event)=>{
          setuserAge(event.target.value)
        }
  

      const errorHandler = () => {
        setError(null);
      };

  return (
    <div>
    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        /> ) }
    <Card className={Classes.input} >
        <form  onSubmit={SubmitHandler}>
            <label>Username</label>
            <input 
            type="UserName"
            onChange={userNameHandler}
            value={userName}
            ></input>
            <label>UserAge</label>
            <input 
            type="UserAge"
            onChange={userAgeHandler}
            value={userAge}
            ></input>
        <Button type="submit">Add User</Button>

        </form>
        </Card>
        </div>
  )
}

export default AddUser