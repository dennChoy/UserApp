import {useState, React, useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ModalInfo from "../UI/ModalInfo";

import classes from "./UserForm.module.css";

const UserForm = props =>{

    const [error, setError] = useState()

    const inputUser = useRef();
    const inputAge = useRef();


    const AddUserHandler= (event)=>{
        event.preventDefault();
        
        const userValue = inputUser.current.value;
        const ageValue = inputAge.current.value;

        if(userValue.trim().length===0 || ageValue.trim().length===0){
            setError({
                error:"Error Input",
                errormsg: "All fields are required"
            });
            return;
        }
        if(+ageValue<1){
            setError({
                error:"Age Error",
                errormsg: "Add a valid age (>0)"
            });
            return;
        }

        props.onAddUser(userValue, ageValue);
        
        inputUser.current.value = '';
        inputAge.current.value = '';
    }
    
    const ClearEror = () =>{
        //console.log("true close");
        setError();
    }
    return(
        <div>
            {error  && <ModalInfo title={"Error"} message={"Error description"} ClearEror={ClearEror}/>}
            <Card >    
                <form className={classes.input} onSubmit={AddUserHandler}>
                    <label htmlFor="user">User</label>
                    <input ref={inputUser} type="text" id="user"/>
                    < label htmlFor="age">age</label>
                    <input ref={inputAge} type="number" id="age"/>
                    <Button type="submit" >Add Users</Button>
                </form>
            </Card>
        </div>
    );
} 

export default UserForm;