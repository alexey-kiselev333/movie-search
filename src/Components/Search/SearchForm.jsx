import SearchBlock from "./SearchBlock";
import ButtonSearch from "../Filters/Button";
import * as React from "react";

const SearchForm = ({setSearchValue, onClickSearch}) => {
    return <div className="content distance-pad">
        <div className="d-flex align-center mb-40 justify-between ">
            <h1>Найди свое кино</h1>
            <SearchBlock setSearchValue={setSearchValue}/>
        </div>
        <div className="justify-center">
            <ButtonSearch onClickSearch={onClickSearch}/>
        </div>
    </div>
}
export default SearchForm;

