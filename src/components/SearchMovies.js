import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieItem from './MovieItem';


function SearchMovies() {
    
    const {movie} = useParams();

    const apiKey=process.env.REACT_APP_API_KEY;
    const [movies,setMovies] = useState([]);

    const getSearchMovies =async ()=>{
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`);
          const data = await response.json();
          setMovies(data.results);
          console.log(movies); 
        } catch (err) {
            // i will write;
        }
    }
    useEffect(()=>{
      getSearchMovies();
    },[]);
  return (
    <div>
      <div className='container pt-3'>
        <center><h3 className='pb-2 text-warning'>{movie.charAt(0).toUpperCase()+movie.slice(1)}</h3></center>
        <div className="movies d-flex  justify-content-center flex-wrap">
            {
              movies.length ? movies.map((ele)=>{
                    return <MovieItem movie={ele} key={ele.id}/>
              })
              : <center><p>No Movie Found</p></center> 
            }
        </div>
    </div>
    </div>
  )
}

export default SearchMovies