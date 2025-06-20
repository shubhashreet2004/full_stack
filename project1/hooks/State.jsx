import { useState } from "react"

const State=()=>
    {
        const [count,setCount]=useState(0)
        const handleIncrement=()=>{
            setCount(count+1)
        }
        return(
            <div>
                <h1>Count:{count}</h1>
                <button onClick={()=>setCount(count+1)}>Increment</button>
            </div>
        )
    }
    export default State