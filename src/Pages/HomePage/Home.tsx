import * as React from "react";

import styles from './Home.module.scss'
import SearchForm from "../../Components/Search/SearchForm";
import Header from '../../Components/Header/Header';
import {IMovie} from "../../Components/types/types";
import Card from "../../Components/Card/Card";
import {Dispatch, SetStateAction} from "react";

export interface IHomeProps {
    movies?: IMovie[];
    goToMovie?: Dispatch<SetStateAction<IMovie | null>>;
    onClickSearch: ()=>void;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

export const Home = ({ onClickSearch, setSearchValue}: IHomeProps) =>
    (<div>
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


