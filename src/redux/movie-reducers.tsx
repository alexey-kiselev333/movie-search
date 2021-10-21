import {SET_MOVIES} from "./types";
import {IMovie} from "../Components/types/types";
import {IStore} from "./IStore";



export const initialState: IStore = {
    movies: null
}

export interface movieAction{
    type: string,
    payload: IMovie[]|null
}

export default function movieReducer(state=initialState,action:movieAction ):IStore{
    switch (action.type){
        case SET_MOVIES:
            return {...state,movies:action.payload}
        default:
            return state
    }
}