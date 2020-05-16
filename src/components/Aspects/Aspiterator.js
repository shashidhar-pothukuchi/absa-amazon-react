import React from 'react';
import Aspect from './Aspect';
import {Card,CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        
        margin: "auto",
        width: theme.spacing(100),
        //height: theme.spacing(10),
      },
    },
    pos: {
      marginTop : 50,
    },
  }));


const Aspiterator = (props) => {
        const classes = useStyles();
        //console.log(this.props.data['PRODUCT']);
        return Object.keys(props.data).map((aspect,i) =>(
            <div className={classes.root}>
            <Card  elevation= {5} className = {classes.pos}>
              <CardContent>
            <Aspect key = {i} name = {aspect} aspects = {props.data[aspect]} ></Aspect>
            </CardContent>
            </Card>
            </div>
        ))
}

export default Aspiterator;