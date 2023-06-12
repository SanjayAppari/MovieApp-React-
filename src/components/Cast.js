import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Profile from './Profile';

function Cast(props) {

    const navigate = useNavigate();

    const apiKey = process.env.REACT_APP_API_KEY;
    const id = props.id;
    const [cast, setCast] = useState();
    const getCast = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
            const data = await response.json();
            setCast(data.cast);
        }
        catch (err) {
            //will write
        }
    }

    useEffect(() => {
        getCast();
    }, [])

    const handleCast = () => {
        navigate(`/cast/${id}`);
    }

    return (
        <div className='container py-3 my-2'>
            <h4 >Top Cast</h4>
            <div className="cast d-flex  pt-0">
                {
                    cast !== undefined &&
                    <>
                        {
                            cast.map((ele, i) => {
                                if (ele.known_for_department === 'Acting')
                                    return <Profile cast={ele} />
                            })
                        }
                        {
                            cast.length===0 && <p>No Cast Found</p>
                        }

                    </>
                }

            </div>
            <center></center>

        </div>
    )
}

export default Cast
