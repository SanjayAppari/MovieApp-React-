import React, { useEffect, useState } from 'react'
import noimg from '../no-img.jpg'

function Poster(props) {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [img, setImg] = useState();
    const path=props.path;

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
  return (
        <img src={path!==null?img:noimg} alt="no poster" />
  )
}

export default Poster