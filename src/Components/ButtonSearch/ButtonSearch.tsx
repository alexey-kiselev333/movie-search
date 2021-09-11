import {Button} from "@material-ui/core";
import {FC} from "react";
import {MOVIES_ROUTE} from "../../routes";
import {Link} from "react-router-dom";
import * as React from "react";

interface PropsButtonSearch{
    onClickSearch:()=>void
}

const ButtonSearch:FC<PropsButtonSearch> = ({onClickSearch})=> {

    return (
        <div className="button-wrapper">
            <Link to={`${MOVIES_ROUTE}`} >
                <Button onClick={onClickSearch} variant="contained" color="secondary">
                    Search
                </Button>
            </Link>
        </div>
    );
};

export default ButtonSearch;




