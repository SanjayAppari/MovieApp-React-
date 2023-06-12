import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Dummy() {
    const { id } = useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        navigate(`/view/${id}`);
    })
  return (
    <div>
        
    </div>
  )
}

export default Dummy
