import React,{Component} from 'react';
import {Button,Container,TextField} from '@material-ui/core';
import './home.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Loader from './Loader';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class Home extends Component{
    state={
        data : [],
        pname: '',
        next : false,
        localloading:false,
        nameerror : false,
        type : '',
        textLabel : 'Please select an option',
        url : ''
    }

    onTextChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
        //console.log(this.state.pname);
        //if(this.state.type === 3)this.getPID(this.state.pname);
    }

    getPID(url){
        let regex = RegExp("https://www.amazon.com/([\\w-]+/)?(dp|gp/product)/(\\w+/)?(\\w{10})");
        let m = url.match(regex);
        if (m) {
            this.state.pname = m[4];
            
            console.log(this.state.pname);
        }
        else{
          alert("Please Check the Url");
          this.setState({localloading:false});
        }
      }

    onSelect = (e) => {
        this.setState({type : e.target.value});
        if(e.target.value === 1) this.setState({textLabel : "Enter name of the product"});
        if(e.target.value === 2) this.setState({textLabel : "Enter ASIN/product ID of the product"});
        if(e.target.value === 3) this.setState({textLabel : "Enter product URL"});
    }

    onSearch = (e) =>{
        this.props.setLoading(true);
        this.setState({localloading:true})
        console.log('fetching data');
        console.log(this.state.pname);
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
            <div>
            
            
          <FormControl variant="outlined" style = {{ margin: 10,marginBottom : 40,minWidth: 180,}}>
        <InputLabel id="demo-simple-select-outlined-label">Search type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.state.type}
          onChange={this.onSelect}
          label="Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Name</MenuItem>
          <MenuItem value={2}>ASIN</MenuItem>
          <MenuItem value={3}>URL</MenuItem>
        </Select>
      </FormControl>
            </div>
             <TextField 
                error ={this.state.nameerror} 
                name="pname"
                value={this.state.pname} 
                id="filled-size-normal" 
                label={this.state.textLabel} 
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
                    onClick={(e) => {if(this.state.type === 3)this.getPID(this.state.pname); this.onSearch(e); }}>Search</Button></p>
             </Container>
        </div>
        )
    }


}

export default Home