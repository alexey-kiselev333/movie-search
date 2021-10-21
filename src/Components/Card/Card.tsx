import styles from './Card.module.scss'
import React, {FC} from 'react'
import {MOVIE_DETAILS_ROUTE} from "../../routes";
import {Link} from "react-router-dom";

interface ICard{
    Poster:string,
    imdbID:string,
    Title:string,
    Year:string
    onPlus:any
}

const Card:FC<ICard>=({Poster,imdbID,onPlus,Title,Year})=>{

    const onClickHandler = () => onPlus({Poster,imdbID,Title,Year})

    return <Link to={`${MOVIE_DETAILS_ROUTE}${imdbID}`}>
                <div className={styles.card} onClick={onClickHandler} >

                <img className={styles.pivoCards} src={Poster}  alt="1sn"/>

        <div className="describe">
            <div className="mb-20">{Title}</div>
            <div>{Year}</div>
        </div>
    </div></Link>

}

export default Card


