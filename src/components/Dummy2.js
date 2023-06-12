import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Dummy2() {
    const navigate=useNavigate();
    const {movie} = useParams();
    useEffect(()=>{
        navigate(`/search/${movie}`)
    })
  return (
    <div>
      
    </div>
  )
}

export default Dummy2
