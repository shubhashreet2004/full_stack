const skills = ({skill})=>{
    return (<div> 
        <h1>skill</h1>
        <ul>
            {skill.map((s,index)=>(
                <li key={index}>{s}</li>
            ))}
        </ul>
    </div>)
}
export default skill