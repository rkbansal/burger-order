import React from "react";
import UserForm from "../components/UserForm";
export default function Order({setSales}){
    return <React.Fragment>
        <UserForm setSales={setSales}/>
    </React.Fragment>
}