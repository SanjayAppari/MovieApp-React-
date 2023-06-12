import React, { useEffect, useState } from 'react'
import RecImg from './RecImg';

function Recomdation(props) {
    const apiKey = process.env.REACT_APP_API_KEY;
    const id = props.id;

    const [recommandation, setRecommandation] = useState();
    const getRecommandations = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`);
            const data = await response.json();
            setRecommandation(data.results);
        } catch (err) {
            //i will write
        }
    }

    useEffect(() => {
        getRecommandations();
    }, []);
    return (
        <div className='container'>
            <h4 className='mt-4'>Recommandations</h4>
            {
                recommandation !== undefined &&
                <>
                    {
                        recommandation.length ?
                            <div className="recommandations my-3">
                                {

                                    recommandation.map((ele) => {
                                        return <RecImg id={ele.id} title={ele.title} path={ele.backdrop_path} />
                                    })
                       
                       
                    }
                            </div> :
                            <p>We are Unable to Show The Recommandations </p>
                    }

                </>
            }

        </div>
    )
}

export default Recomdation
