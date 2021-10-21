import {SET_MOVIES} from "./types";
import {IMovie} from "../Components/types/types";



export const setMovies = (movies:IMovie[]|null) =>({
    type:SET_MOVIES,
    payload:movies,
});