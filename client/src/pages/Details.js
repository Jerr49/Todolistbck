import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Forms from './Forms'


function Details() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [todo, setTodo] = useState(null)

    const [upd, setUpd] = useState(false)

    const getdata = () =>{
        fetch(`http://localhost:7000/todo/${id}`)
        .then((res)=>res.json())
        .then((data)=> setTodo(data.Todo))
      }
      useEffect(()=>{
          setTimeout(() => {
            getdata();
        }, 5000);
      });

      const getDel = ()=>{
        fetch(`http://localhost:7000/todo/${id}`, {
            method: 'DELETE'
        }).then(()=> navigate('/'))
      }

      const updateButton = () =>{
        setUpd(!upd)
      }
    
  return (
    <div>
        <div>
        <h2>{id}</h2>
        {todo && (
            <>
                <div>
                    <h1>{todo.title}</h1>
                    <p>{todo.body}</p>
                    <p>{todo.createdAt}</p>
                    <div>
                        <button onClick={updateButton}>Update</button>
                        <button onClick={getDel}>Delete</button>
                    </div>
                </div>
            </>
        )}
    </div>
    <div>
        {upd && <Forms data={todo} id={id}/>}
    </div>
    </div>
  )
}

export default Details