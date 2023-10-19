import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser =props=>{

  const [enterUsername,setEnteredUsername] = useState('');
  const [enterAge,setEnteredAge] = useState('');
  const [error,setError]=useState('');

     const usernameChangeHandler = event =>{
      setEnteredUsername(event.target.value)
     }
     const ageChangeHandler = event =>{
      setEnteredAge(event.target.value)
     }
     const errorHandler = () =>{
      setError(null);
     }

    const AddUserHandler = (event) =>{
           event.preventDefault();

           if(enterUsername.trim().length === 0 || enterUsername.trim().length === 0 ){
            setError({
              title:'Invaild input',
              message:'Please enter a valid name and age.'
            })
            return;
           }

           if(+enterAge < 1){
            setError({
              title:'Invaild input',
              message:'Please enter a valid age(>0).'
            })
            return;
           }

           props.onAddUser(enterUsername,enterAge)
           setEnteredAge('');
           setEnteredUsername('');

           
    }
    return(<div>
      {error && <ErrorModal  title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card>
      <form onSubmit={AddUserHandler}> 
      <label  htmlFor="username">UserName</label>
      <input id="username" type="text" value={enterUsername} onChange={usernameChangeHandler} />
      <label  htmlFor="age">Age</label>
      <input id="age" type="text" value={enterAge} onChange={ageChangeHandler} />
      <Button type='submit'> Add User </Button>
    </form>
      </Card>
      </div>
       
    )
}

export default AddUser;