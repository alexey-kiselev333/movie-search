import {Button} from "@material-ui/core";


const ButtonSearch = function ({onClickSearch}) {

    return (
        <div className="button-wrapper">
            <Button onClick={onClickSearch} variant="contained" color="secondary">
                Apply filters
            </Button>
        </div>
    );
};

export default ButtonSearch;




