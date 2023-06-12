import React, { useEffect, useState } from 'react'
import Backdrop from './Backdrop';
import { useNavigate } from 'react-router-dom';

function Images(props) {
    const apiKey = process.env.REACT_APP_API_KEY;
    const id = props.id;
    const [imgs, setImgs] = useState();
    const navigate = useNavigate();
    const getImages = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`);
            const data = await response.json();
            setImgs(data.backdrops);
        } catch (err) {
            //i will write
        }
    }

    useEffect(() => {
        getImages();
    }, [])

    const handleImages = () => {
        navigate('/');
    }
    return (
        <div className='container'>
            <h4>Photo Gallery <h6>( {imgs !== undefined && imgs.length} )</h6></h4>
            {
                imgs !== undefined &&
                <>
                    {
                        imgs.length ?
                            <div className="my-4 gallery">
                                {
                                    imgs.map((ele, i) => {
                                            return <Backdrop path={ele.file_path} />
                                    })
                                }
                            </div>
                            : <p>We are Unable to Show The Photos </p>
                    }
                </>
            }
        </div>
    )
}

export default Images
