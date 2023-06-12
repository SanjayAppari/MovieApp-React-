import React, { useEffect, useState } from 'react'
import noimg from '../no-img.jpg'
function Profile(props) {
    const apiKey = process.env.REACT_APP_API_KEY;
    const cast = props.cast;
    const [img, setImg] = useState();

    const getImage = async () => {
        try {
            const response = await fetch(`https://image.tmdb.org/t/p/w500/${cast.profile_path}?api_key=${apiKey}`);
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
        <div className='pp my-3'>
            <div className="profile bg-dark me-3" >
                <div className="image">
                    <img src={cast.profile_path!==null ? img : noimg} alt="" />
                </div>
                <div className='pt-2'>
                    <b><span className='mt-5 p-0'>{cast.name}</span></b> <br />
                    <span>{cast.character}</span>
                </div>
            </div>
        </div>
    )
}

export default Profile
