import React, { useEffect, useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Link, useParams } from 'react-router-dom'
import Cast from './Cast';
import Images from './Images';
import Recomdation from './Recomdation';
import Poster from './Poster';


function MovieView() {


    const bgposter = localStorage.getItem('bg-poster');
    console.log(bgposter);
    const apiKey = process.env.REACT_APP_API_KEY;

    const { id } = useParams();
    const [details, setDetails] = useState();


    const getDetails = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
            const data = await response.json();
            setDetails(data);
        } catch (err) {
            //i will write
        }
    }


    useEffect(() => {
        getDetails();

    }, [id]);

    var style = {
        backgroundImage: 'linear-gradient(to right, rgba(51,51,0, 1), rgba(0,0,0,0.9)) ,url(' + bgposter + ')',
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2)',
        // -webkit-filter: 'blur(8px)'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '30px',
        // height:'100vh',
        // width:'99.6%'
    }

    return (
        <>
           
            <div div style={style} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 view-poster ">
                            <div className="card shadow-lg">
                                {
                                    details &&
                                    <Poster path={details.poster_path} />
                                }
                            </div>
                        </div>
                        {details &&
                            <div className="col-md-9 view-details">
                                <h2 style={{ margin: '1px' }}>{details.title} ({details.release_date.slice(0, 4)})</h2>
                                {
                                    details.genres.map((ele) => {
                                        return <span className='me-2' key={ele.id}>{ele.name}</span>
                                    })
                                }
                                <br />
                                <span className='me-2'>{details.adult === false ? "U/A" : "A"}</span>
                                <span> </span>
                                <span className='me-1'>{details.status + '-' + details.release_date}</span>
                                <span> </span>
                                <span className='me-1'>{details.runtime}m</span>
                                <br />
                                <i className="fa-solid fa-star mb-3" style={{ fontSize: '20px', color: 'yellow' }} ></i><span style={{ fontSize: '20px' }}> {Math.round((details.vote_average * 10))}%</span>
                                <br />
                                <h5 className='mt-4' style={{ color: 'grey' }}>{details.tagline}</h5>
                                <h5>OverView </h5>
                                <p>{details.overview}</p>
                                <Link to={details.homepage} className="btn btn-outline-warning">HomePage</Link>
                            </div>
                        }
                    </div>
                </div>
            </div >
            <Cast id={id} display='1' />
            <Images id={id} />
            <Recomdation id={id} />
            </>
         

    )
}

export default MovieView
