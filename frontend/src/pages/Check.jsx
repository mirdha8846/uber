// Check.jsx
import { userDataContext } from "../context/UserContext";
import { useContext } from "react";

export default function Check() {
    const { user } = useContext(userDataContext);
   
    console.log(user,"check");
    return (
        <h1>checking..</h1>
    );
}