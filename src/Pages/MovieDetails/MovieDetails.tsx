import React, {FC} from "react";

import styles from './movieCard.module.scss'
import {IMovie} from "../../Components/types/types";
import {useParams,useHistory} from 'react-router-dom'
interface PropsMovieDetails{
    dataMovie: IMovie|null
}

interface IParams{
    movieId:string
}

const MovieDetails:FC<PropsMovieDetails>=({dataMovie})=> {

    const history = useHistory()

    if (dataMovie) {
        const {Title, Poster,Year} = dataMovie

        return <div className={styles.distance}>
            <div>
                <button onClick={() => history.push('/movies')}>Back</button>
            </div>
            <div className="d-flex flex-wrap">
            <div className="cardx">
                <div>
                    <img className={styles.movieCards} src={Poster} alt="1sn"/>
                </div>
                <div className="movieDetailsCard">
                    <div className="mb-20">{Title}</div>
                    <div>{Year}</div>
                </div>
            </div>
        </div>
        </div>
    } else { return <div></div>}
}

export default MovieDetails