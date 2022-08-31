import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {title, body}
        console.log(data);

    fetch('http://localhost:7000/todo/',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(()=>{console.log('new data added')})
    navigate('/')
    }
  return (
    <div>Create

        <form action="" >
            <div><input type="text" placeholder='title' value={title} onSubmit={handleSubmit} onChange={(e) => setTitle(e.target.value)}/></div>
            <div><textarea name="" id="" cols="30" rows="10" value={body} onSubmit={handleSubmit} onChange={(e)=>setBody(e.target.value)}></textarea></div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Create