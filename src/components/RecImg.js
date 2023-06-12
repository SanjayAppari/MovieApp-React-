import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noimg from '../no-img.jpg'

function RecImg(props) {
    
    const id=props.id;
    const title= props.title;
    const apiKey = process.env.REACT_APP_API_KEY;
    const [img, setImg] = useState(null);
    const path=props.path;
    const navigate=useNavigate();

    const getImage = async () => {
        try {
            const response = await fetch(`https://image.tmdb.org/t/p/w500/${path}?api_key=${apiKey}`);
            const data = await response.url;
            setImg(data);
        } catch (err) {
            //i will write
        }
    }
    useEffect(() => {
        getImage();
    }, [])
    console.log(img);
    const handleClick=()=>{
        // console.log(img);
        localStorage.setItem('bg-poster',img);
        navigate(`/view1/${id}`);
    }
  return (
    <div className='rec-card' onClick={handleClick}>
        <img src={path!==null?img:noimg} alt="" width={'250px'} height={'130px'} style={{borderRadius:'10px'}}/>
        <h6 className='mt-3'>{title}</h6>
    </div>
  )
}

export default RecImg
