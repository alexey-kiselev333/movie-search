import * as React from "react";

const SearchBlock = ({setSearchValue}) =>

    <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search"/>
        <input
            placeholder="поиск..."
            onChange={(event) => {
                if (event.target.value === "") {
                    setSearchValue("");
                } else {
                    setSearchValue(`${event.target.value}`)
                }
            }}
        />
    </div>

export default SearchBlock;