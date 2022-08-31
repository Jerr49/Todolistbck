import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [todo, setTodo] = useState(null)


    const getdata = ()=>{
        fetch("http://localhost:7000/todo").then((res)=>res.json()).then((data)=> setTodo(data.Todo))
      }
      useEffect(()=>{
          setTimeout(() => {
            getdata();
        }, 5000);
      }, []);
    
  return (
    <div>
        <div>

        {todo && (
            <>
            {todo.map((data) => (
                <div key={data._id}>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                    <Link to={`/${data._id}`}>Read More</Link>
                </div>
            ))}
            </>
        )}
        </div>
    </div>
  )
}

export default Home