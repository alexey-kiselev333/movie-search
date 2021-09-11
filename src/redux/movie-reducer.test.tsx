import movieReducer, {initialState, movieAction} from "./movie-reducers";
import {render, screen} from "@testing-library/react";
import App from "../App";
import {setMovies} from "./movie-actions";
import {IMovie} from "../Components/types/types";
import {IStore} from "./IStore";




test('test of reducer', () => {
    let initialTestState: IStore = {
        movies: null
    }
    let action:movieAction = setMovies([{
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Title: "The Avengers",
    Type: "movie",
    Year: "2012",
    imdbID: "tt0848228"},
    ])

    let newState=movieReducer(initialTestState,action)
    expect(newState.movies?.length).toBe(1)
});



