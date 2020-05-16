import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import './index.css';
import Home from './components/Home';
import Details from './components/Details';
import Analyse from './components/Analyse';


class App extends Component{
  state ={
    id:'',
    reviews:[],
    product_data:[],
    loading:false,
    anloading:false,
}

setLoading = (val)=>{
  this.setState({loading:val});
}

setAnloading = (val)=>{
  this.setState({anloading:val});
}

setProductData = (data) =>{
  this.setState({product_data : data});
  this.setState({id:data.id});
  console.log(this.state.id);
  console.log(this.state.product_data);
  this.setLoading(false);
} 

setReviews = (data) =>{
  this.setState({reviews : data});
  //console.log(data);
  this.setAnloading(false);

}

getSentimentReviews = (data) =>{
  axios.get(`http://localhost:5000/analyse?pid=${this.state.id}`)
        .then(res => this.setReviews(res.data))
        .catch(err => console.log(err));
        console.log();
}

addReviews = (data) =>{
  this.setLoading(false);
  this.setAnloading(true);
  this.getSentimentReviews(data);  
}
    render(){
      return(
        <Router>
    <div className="App">
      <Route exact path = '/' render={props =>(
        <Home  addData={this.setProductData} setLoading={this.setLoading} loading = {this.state.loading}></Home>
      )}/>
      </div>
    <Route path = "/details" render={props =>(
      <Details data ={this.state.product_data} loading = {this.state.loading} 
      setLoading={this.setLoading} addReviews={this.addReviews} setAnloading = {this.setAnloading}></Details>
    )} />
    <Route path = "/analyse" render={props =>(
      <Analyse data ={this.state.product_data} loading = {this.state.loading} 
      anloading = {this.state.anloading} setAnloading = {this.state.setAnloading}
      reviews = {this.state.reviews} ></Analyse>
    )} />
    </Router>
    )
    }
}

export default App;
