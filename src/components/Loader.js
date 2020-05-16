import React,{Fragment} from 'react';
import {CircularProgress} from '@material-ui/core';
import './loader.css'

export const Loader = (props) => {
    //const classes = useStyles();
    return (
        <Fragment>
            <div className="adjuster" >
            <CircularProgress size={100}></CircularProgress>
            <p>{props.message}</p>
            </div>
        </Fragment>
    )
}

export default Loader;
