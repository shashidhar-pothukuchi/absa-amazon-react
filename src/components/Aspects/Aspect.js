import React,{useState} from 'react';
import "./aspect.css";
import {Paper,Button,Divider} from '@material-ui/core';
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';
import {List,ListItem,ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "react-circular-progressbar/dist/styles.css";
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";


  const useStylesProgress = makeStyles((theme) =>({
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
    buttonpos:{
      margin:30,
    },
    listItemText:{
      fontSize:'1.4em',//Insert your required size
    }
  }));

const Aspect = (props) => {
  
  const [open, setOpen] = useState(false);
  const [displayList,setDisplayList] = useState([]);
  const [type,setType] = useState('');
  //const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (e,num) => {
    if(num === 0){setDisplayList([...displayList,...props.aspects.positive]);setType('Positive')}
    else if(num === 1){setDisplayList([...displayList,...props.aspects.neutral]);setType('Neutral')}
    else if(num === 2){setDisplayList([...displayList,...props.aspects.negative]);setType('Negative')}
    console.log(displayList);
    setOpen(true);
  };

  const handleClose = () => {
    //displayList.map((he) => console.log(he));
    //console.log(displayList);
    setDisplayList([]);
    setOpen(false);
  };

  //const descriptionElementRef = React.useRef(null);
  // React.useEffect(() => {
  //   if (open) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  // }, [open]);

  const classes = useStylesProgress();
        //console.log(this.props.aspects);      
        return(
            <div >
        <Paper elevation = {2} >
        <p>{props.name}</p>
        <div style={{float:"left"}} >


        <div className="asp-percent" style={{ width: "13%", }}>
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

        <div style={{margin:30,marginLeft:20}}>
         <Button style = {{fontSize : 18}} onClick={e => handleClickOpen(e,0)}>View</Button>
        </div>
        </div>


        <div className="asp-percent" style={{ width: "13%" }}>
        <ChangingProgressProvider values={[0,props.aspects.percent[2]]}>
        {percentage => (
         <CircularProgressbar value={percentage} text={`${props.aspects.percent[2]}%`} 
         styles={buildStyles({
           textSize: "25px",
           pathColor: "#212121",
           textColor: "#212121",
           pathTransitionDuration: 0.7,
           
         })}/>
        )}
      </ChangingProgressProvider>

      <div style={{margin:30,marginLeft:20}}>
         <Button style = {{fontSize : 18}} onClick={e => handleClickOpen(e,1) }>View</Button>
        </div>
        </div>


        <div className="asp-percent" style={{ width: "13%" }}>
        <ChangingProgressProvider values={[0,props.aspects.percent[1]]}>
        {percentage => (
         <CircularProgressbar value={percentage} text={`${props.aspects.percent[1]}%`} 
         styles={buildStyles({
           textSize: "25px",
           pathColor: "#f50057",
           textColor: "#f50057",
           pathTransitionDuration: 0.7
           
         })}/>
        )}
      </ChangingProgressProvider>

      <div style={{margin:30,marginLeft:20}}>
         <Button style = {{fontSize : 18}} onClick={e => handleClickOpen(e,2)}>View</Button>
        </div>
        </div>


        </div>
        </Paper>

        <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        maxWidth = 'md'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
         <DialogTitle id="scroll-dialog-title" style={{textAlign : 'center',fontSize:30}}>Reviews</DialogTitle>
        <p> {props.name} : {type}</p>
        <DialogContent dividers>
            <div className={classes.demo} style = {{fontsize : 30}}>
            <List>
            {displayList.map((review) =>
                <div>
                  <ListItem>
                  <ListItemText  classes={{primary:classes.listItemText}} primary={review} />
                </ListItem>
                <Divider />
                </div>
            )}
            
            </List>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" style = {{fontSize : 15}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

        </div>
        )

}

export default Aspect;