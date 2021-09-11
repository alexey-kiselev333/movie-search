import axios from 'axios';
import {setMovies} from "./movie-actions";

import React from "react";
import { IMovie } from 'Components/types/types';
import {IStore} from "./IStore";


const {REACT_APP_API_KEY, REACT_APP_MAIN_API} = process.env

export const loadMovies = (search: string) => async (dispatch: (arg0: { type: string; payload: IMovie[] | null; }) => IStore)=>{
    return await axios
        .get(`${REACT_APP_MAIN_API}/?apikey=${REACT_APP_API_KEY}&s=${search}`)
        .then((res) =>dispatch(setMovies(res.data.Search)));

}