import SearchBlock from "./SearchBlock";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import * as React from "react";
import {Dispatch, FC, SetStateAction} from "react";
import {HOME_ROUTE} from "../../routes";
import {Link} from "react-router-dom";

interface PropsSearchForm {
    setSearchValue: Dispatch<SetStateAction<string>>
    onClickSearch: ()=>void
}

const SearchForm: FC<PropsSearchForm> = ({setSearchValue, onClickSearch}) => {
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

