import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noimg from '../no-img.jpg'

function MovieItem(props) {
    const apiKey=process.env.REACT_APP_API_KEY;
    const id=props.movie.id;
    const poster_url = props.movie.poster_path;
    const backdrop = props.movie.backdrop_path;

    const [poster,setPoster] = useState();
    const navigate = useNavigate();

    const getPoster= async ()=>{
        try {
            const response = await fetch(`https://image.tmdb.org/t/p/w500/${poster_url}?api_key=${apiKey}`);
            const data= await response.url;
            if(poster_url!==null)
            setPoster(data);
            else
            setPoster(noimg)

        } catch (err) {
            //i will write
        }
    }

    const handleClick = async ()=>{
        console.log(id);
        const response = await fetch(`https://image.tmdb.org/t/p/w500/${backdrop}?api_key=${apiKey}`);
        const data=response.url;
        localStorage.setItem('bg-poster',data);
        console.log(data);
        navigate(`/view/${id}`);
    }

    useEffect(()=>{
        getPoster();
    },[]);

    return (
        <div className="card bg-dark shadow-lg" onClick={handleClick}>
            <div className="image">
                <img src={poster} alt="" />
            </div>
            <div className="content">
                <i className="fa-solid fa-star"> <span style={{fontSize:'12px'}}> {props.movie.vote_average}</span></i>
                <span>Title: {props.movie.title.slice(0,30) }{ props.movie.title.length>30 ? '...':''}</span> 
                <span>Year: {props.movie.release_date.slice(0,4)}</span>
            </div>
        </div>
    )
}

export default MovieItem
