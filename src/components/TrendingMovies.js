import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem'

function Movies() {
  const apiKey=process.env.REACT_APP_API_KEY;
  const [movies,setMovies] = useState([]);

  
  const getTrendingMovies =async ()=>{
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=1`);
        const data = await response.json();
        setMovies(data.results);
        console.log(movies); 
      } catch (err) {
          // i will write;
      }
  }
  useEffect(()=>{
    getTrendingMovies();
  },[]);
  return (
    <div className='container pt-3'>
        <center><h3 className='pb-2 text-warning'>Trending Movies</h3></center>
        <div className="movies d-flex  justify-content-center flex-wrap">
            {
              movies.length && movies.map((ele)=>{
                    return <MovieItem movie={ele} key={ele.id}/>
              })
            }
        </div>
    </div>
  )
}

export default Movies
