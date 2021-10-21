import './App.scss';
import * as React from "react";

import {Redirect, Route, Switch, useParams} from 'react-router-dom';
import {Home} from './Pages/HomePage/Home'
import {ABOUT_TEAM_ROUTE, HOME_ROUTE, MOVIE_DETAILS_WITH_SUB_ROUTE, MOVIES_ROUTE} from "./routes";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import {useDispatch, useSelector} from "react-redux";
import {loadMovies} from "./redux/operations";
import {IMovie} from "./Components/types/types";
import Header from "./Components/Header/Header";

import Navigation from "./Pages/Navigation";
import AboutTeam from "./Pages/AboutTeam/AboutTeam";
import {Movies} from "./Pages/Movies/Movies";


function App() {

        //сохранение состояния поисковой строки
        const [search, setSearchValue] = React.useState<string>('');
        //сохранение состояния данных о фильме
        const [dataMovie,goToMovie]=React.useState<IMovie|null>(null);

        const dispatch = useDispatch()
        //выборка данных о фильме из стейта

        const {movies} = useSelector((state:any) => state.movies)
        //загрузка данных о фильме в стейт по нажатию на кнопку
        const onClickSearch = ()=>dispatch(loadMovies(search));

        console.log(movies)

    return (
        <div className="wrapper clear">
            <Header/>
            <Navigation/>
            <Switch>
                <Route exact path={HOME_ROUTE} >
                    <Home setSearchValue={setSearchValue} onClickSearch={onClickSearch} />
                </Route>
                <Route exact path={MOVIES_ROUTE}><Movies setSearchValue={setSearchValue} onClickSearch={onClickSearch} movies={movies} goToMovie={goToMovie}/> </Route>
                <Route exact path={MOVIE_DETAILS_WITH_SUB_ROUTE}> <MovieDetails dataMovie={dataMovie} /></Route>
                <Route exact path={ABOUT_TEAM_ROUTE}> <AboutTeam/></Route>
            </Switch>
            <Redirect to="/" />
        </div>
    );
}
export default App;