import React from 'react';
import "./aspect.css";
import { CircularProgress,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import {Paper} from '@material-ui/core';

  const useStylesProgress = makeStyles({
    root: {
      position: 'relative',
    },
    pos: {
      color: '#4caf50',
      //marginLeft : '100px',
      
    },
    neut:{
      color: '#212121',
    },
    neg : {
      color : '#f50057',
    },
    bottom: {
      color: '#6798e5',
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
  });

const Aspect = (props) => {
  const classes = useStylesProgress();
        //console.log(this.props.aspects);
        
        return(
            <div >
          <Paper elevation = {2} >
        <p>{props.name}</p>
        <div style={{float:"left"}} >
        <div className="asp-percent" style={{ width: "13%" }}>
          
        <ChangingProgressProvider values={[0,props.aspects.percent[0]]}>
        {percentage => (
         <CircularProgressbar value={percentage} text={`${props.aspects.percent[0]}%`} className = {classes.pos}
         styles={buildStyles({
           textSize: "25px",
           pathColor: "#4caf50",
           textColor: "#4caf50",
           pathTransitionDuration: 0.7
           
         })}/>
        )}
      </ChangingProgressProvider>
        
        </div>
        <div className="asp-percent" style={{ width: "13%" }}>
        <ChangingProgressProvider values={[0,props.aspects.percent[1]]}>
        {percentage => (
         <CircularProgressbar value={percentage} text={`${props.aspects.percent[1]}%`} 
         styles={buildStyles({
           textSize: "25px",
           pathColor: "#212121",
           textColor: "#212121",
           pathTransitionDuration: 0.7
           
         })}/>
        )}
      </ChangingProgressProvider>
        </div>
        <div className="asp-percent" style={{ width: "13%" }}>
        <ChangingProgressProvider values={[0,props.aspects.percent[2]]}>
        {percentage => (
         <CircularProgressbar value={percentage} text={`${props.aspects.percent[2]}%`} 
         styles={buildStyles({
           textSize: "25px",
           pathColor: "#f50057",
           textColor: "#f50057",
           pathTransitionDuration: 0.7
           
         })}/>
        )}
      </ChangingProgressProvider>
        </div>
        </div>
        </Paper>
        </div>
        )

}

export default Aspect;