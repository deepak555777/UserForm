import React from 'react'
import Card from './UI/Card'
import Classes from './UserList.module.css'

function UserList(props) {
  return (
 <Card className={Classes.users}>
    <ul>
    {props.users.map((user)=>(
        <li>
      User Name : {user.name} User Age: ({user.age} years old)
     </li>
    ))
}
</ul>
 </Card>
  )
}

export default UserList