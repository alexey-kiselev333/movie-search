import styles from './Card.module.scss'
import React from 'react'
import {MOVIE_DETAILS_ROUTE} from "../../routes";
import {Link} from "react-router-dom";

function Card({Poster,movieId}) {
    return <div className={styles.card}>
    <Link to={`${MOVIE_DETAILS_ROUTE}${movieId}`}>
        <img className={styles.pivoCards} src={Poster} alt="1sn"/>
    </Link>
    </div>

}

export default Card


