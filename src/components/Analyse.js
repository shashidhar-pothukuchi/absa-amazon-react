import React,{Component} from 'react';
import Loader from './Loader';
import Aspiterator from './Aspects/Aspiterator';
import {Link} from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
//import {Menu,MenuItem} from '@material-ui/core';

function HomeIcon (props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
export class Analyse extends Component {
  
    

    render(){
        if(this.props.loading){
            return(  
                 <Loader message={"Getting Reviews"}></Loader>
                 )
        }
        if(this.props.anloading){
            return(  
                 <Loader message={"Analysing Reviews"}></Loader>
                 )
        }
    return (
        <div>
           <div style ={{marginLeft:100}}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <HomeIcon style={{fontSize: 50}} color="primary"/>
            </Link>
        </div>
        <h1>Analysis</h1>
        <Aspiterator data = {this.props.reviews} ></Aspiterator>
        </div>
    )
    }
}

export default Analyse;
