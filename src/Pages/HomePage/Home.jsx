import Card from "../../Components/Card/Card";
import * as React from "react";

function Home({movies}) {
    return <div>
        <div className="d-flex flex-wrap">
            {movies.map(item => (
                <Card movieId={item.imdbID} Poster={item.Poster}/>))}
        </div>
    </div>
}

export default Home