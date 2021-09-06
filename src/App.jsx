import './App.scss';
import Header from "./Components/Header/Header";
import * as React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './Pages/HomePage/Home'
import {fetchMoviesApi} from "./Components/FetchApi/FetchApi";
import {HOME_ROUTE, MOVIE_DETAILS_WITH_SUB_ROUTE} from "./routes";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import SearchForm from "./Components/Search/SearchForm";


function App() {

    const [search, setSearchValue] = React.useState('');
    const [movies, setMovies] = React.useState([]);

    const [error, setError] = React.useState(null);
    console.log(search)

    const onClickSearch = () => {

        sendRequest(search);
    };

    const sendRequest = (search) => {
        fetchMoviesApi(search)
            .then((response) => {

                if (!response.length) {
                    throw new Error('Please try again your request');
                }
                setMovies(response);

                setError(null);
            })
            .catch((error) => setError(error.message))
    };
    console.log(movies)
    return (
        <div className="wrapper clear">
            <Header/>
            <SearchForm setSearchValue={setSearchValue} onClickSearch={onClickSearch}/>
            <Switch>
                <Route exact path={HOME_ROUTE} >
                    <Home movies={movies} />
                </Route>
                <Route exact path={MOVIE_DETAILS_WITH_SUB_ROUTE} component={MovieDetails}/>
            </Switch>
            <Redirect to="/" />
        </div>
    );
}
export default App;