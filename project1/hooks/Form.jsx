import { useState } from "react"

const Form=()=>{
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        department:''
    })
    const handleChange=()=>{

    }
    const handleSubmit=(e)=>{
           e.preventDefault()
           console.log(formData);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                <br/>
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                <br/>
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                <br/>
                <label htmlFor="">Department</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange}/>
            </form>
        </div>
    )
}