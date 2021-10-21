import React from 'react';
import SearchForm from "../../Components/Search/SearchForm";
import Card from "../../Components/Card/Card";
import styles from "../HomePage/Home.module.scss";
import {IHomeProps} from "../HomePage/Home";



export const Movies = ({movies, goToMovie, onClickSearch, setSearchValue}:IHomeProps) => movies ? (
    <div>
        <SearchForm setSearchValue={setSearchValue} onClickSearch={onClickSearch}/>
        <div className="d-flex flex-wrap justify-around">
            {movies.map((item) => (
                <Card
                    onPlus={goToMovie}
                    imdbID={item.imdbID}
                    Poster={item.Poster}
                    Title={item.Title}
                    Year={item.Year}
                />))}
        </div>
    </div>
) : (
    <div>
        <SearchForm setSearchValue={setSearchValue} onClickSearch={onClickSearch}/>
        <div className="d-flex flex-wrap">
            <div className={styles.card}>
                <img
                    className={styles.pivoCards}
                    src={"https://moviespotting.ru/wp-content/uploads/2020/10/2nzfnvlxultqi338w1mp8szo1gc.jpg"}
                />
            </div>
        </div>
    </div>
)


