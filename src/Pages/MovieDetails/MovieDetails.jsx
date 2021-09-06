import React, {useEffect, useState} from "react";
import {fetchMoviesApiByID} from "../../Components/FetchApi/FetchApi";
import styles from './movieCard.module.scss'
import {useParams} from "react-router-dom";


function MovieDetails() {
    const id = useParams().movieId
    const [content, setContent] = useState({});
    useEffect(() => {
        fetchMoviesApiByID(id).then((content) => setContent(content));
    }, []);

    return <div className={styles.distance}>
        <div className={styles.card}>
            <div className="title">
                {content?.Title}
            </div>
            <img className={styles.movieCards} src={content.Poster} alt="1sn"/>
        </div>
    </div>
}

export default MovieDetails