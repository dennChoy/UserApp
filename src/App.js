import { Fragment, useState } from "react";
import UserForm from "./components/Users/UserForm";
import UsersList from "./components/Users/UsersList";

function App() {

  const [userList, setUserList] = useState([]);
  /*
  const user[] = {
    {name:"max", age:"5"},
    {name:"ma3x", age:"5"},
  }
  */

  const AddUser = (uName, uAge) =>{
    setUserList((prevUserList) => {
      return [...prevUserList, {name:uName, age:uAge, id:Math.random().toString()}]
    });
  }

  return (
    <Fragment>
      <UserForm onAddUser={AddUser}/>
      <UsersList users={userList} test3={"prueba"}/>
    </Fragment>
  );
}

export default App;
