import React,{Component} from 'react';
import {Button,Container,TextField} from '@material-ui/core';
import './home.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Loader from './Loader';

export class Home extends Component{
    state={
        data : [],
        pname: '',
        next : false,
        localloading:false,
        nameerror : false,
    }

    onTextChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
        //console.log(this.state.pname);
    }

    onSearch = (e) =>{
        this.props.setLoading(true);
        this.setState({localloading:true})
        console.log('fetching data');
        this.setState(axios.get(`http://localhost:5000/search?pname=${this.state.pname}`)
        .then(res =>{ 
                    if(res.message === "Internal Server Error"){
                        console.log("Error");
                        this.setState({localloading:false});
                        this.setState({nameerror : true});

                    }
                    if(res.data.id === '404a99'){
                        console.log("Hello");
                        this.setState({localloading:false});
                        this.setState({nameerror : true});

                    }else{
                        this.setState({next : true});
                        this.setState({localloading:false});
                        this.props.addData(res.data);
                    }})
        .catch(err => console.log(err)));
    }

    render(){
        if(this.state.localloading){
            return( <Loader message={"Fetching Data"}></Loader>)
        }
        if(this.state.next){
            return(<Redirect to="/details" ></Redirect> )
        }
        return(
            
        <div>
            <Container fluid>
             <Container className="title">
                <h1 > Aspect Based Sentiment Analysis</h1>
             </Container>
            <div className = "search" >
             <TextField 
                error ={this.state.nameerror} 
                name="pname"
                value={this.state.pname} 
                id="filled-size-normal" 
                label="Enter name of product" 
                fullWidth  
                inputProps={{style: {fontSize: 20}}}
                onChange = {this.onTextChange} 
                helperText={ this.state.nameerror ? "Incorrect entry" : ""}  
                /></div>
              <p className="searchbtn" >
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="Large"
                    style={{fontSize:'17px'}}  
                    onClick={this.onSearch} 
                >Search</Button></p>
             </Container>
        </div>
        )
    }


}

export default Home