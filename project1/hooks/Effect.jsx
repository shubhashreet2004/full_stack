import { useState } from "react";
import { useEffect } from "react";

const Effect=()=>{
    const [count,setCount]=usestate(0)
    const [users,setUsers]=useState([])
    //useEffect(()=>{
    //    console.log("from useEffect");
    //},[count])
    useEffect(()=>{
        fetch('https://jsponplacement.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
    },[])
    Console.log(users);
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <ul>
                {
                    users.map((user)=>(<li key={user.id}>{user.name}</li>))
                }
            </ul>
        </div>
    )
}
export default Effect