import React from 'react';
import Aspect from './Aspect';
import {Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        
        margin: "auto",
        width: theme.spacing(100),
        //height: theme.spacing(10),
      },
    },
  }));


const Aspiterator = (props) => {
        const classes = useStyles();
        //console.log(this.props.data['PRODUCT']);
        if(props.data){
        return Object.keys(props.data).map((aspect,i) =>(
            <div className={classes.root}>
            <Paper  elevation={2}>
            <Aspect key = {i} name = {aspect} aspects = {props.data[aspect]} ></Aspect>
            </Paper>
            </div>
        ))}
        else {return(<h1>Nope</h1>)}
}

export default Aspiterator;