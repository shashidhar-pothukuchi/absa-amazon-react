import React,{Component} from 'react';
import Loader from './Loader';
import './details.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
   

export class Details extends Component {
    
     onConfirm = (e) =>{
        this.props.setLoading(true);
        console.log('passing data');
        axios.get(`http://localhost:5000/scrap?pid=${this.props.data.id}`)
        .then(res => this.props.addReviews(res.data))
        .catch(err => console.log(err));
        this.props.setAnloading(false);
    }
    render(){
        if(this.props.loading){
        return( <Loader message={"Fetching Data"}></Loader>)
        }
    return (
        <div className="container" >
            <TableContainer component = {Paper} elevation={5}>
            <h1>Product Details</h1>
            <Table size="Large" aria-label="simple table" style = {{fontSize : "20px"}}>
            <TableBody>
             <TableRow>
              <TableCell component="th" scope="row" style = {{fontSize : "20px"}}>
                  Name : 
              </TableCell>
              <TableCell align="center" style = {{fontSize : "20px"}}>{this.props.data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" style = {{fontSize : "20px"}}>
                  Price :
              </TableCell>
              <TableCell align="center" style = {{fontSize : "20px"}}>{this.props.data.price}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" style = {{fontSize : "20px"}}>
                  Product ID : 
              </TableCell>
              <TableCell align="center" style = {{fontSize : "20px"}}>{this.props.data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" style = {{fontSize : "20px"}}>
                  Amazon Link :  
              </TableCell>
              <TableCell align="center" style = {{fontSize : "20px"}}><a href={this.props.data.url} target = "_blank"  rel="noopener noreferrer"> Click here </a></TableCell>
            </TableRow>
            </TableBody>
            </Table>
            <Link to="/analyse" style={{textDecoration:'none'}}><p className="searchbtn" >
                  <Button variant="contained" color="primary" size="Large"
                style={{fontSize:'17px'}} onClick= {this.onConfirm} >Analyse</Button></p></Link>
            </TableContainer>
        </div>
    )
    }
}

export default Details;