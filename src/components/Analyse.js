import React,{Component} from 'react';
import Loader from './Loader';
import Aspiterator from './Aspects/Aspiterator';


export class Analyse extends Component {
  

    render(){
        if(this.props.loading){
            return(  
                 <Loader message={"Scraping Reviews"}></Loader>
                 )
        }
        if(this.props.anloading){
            return(  
                 <Loader message={"Analysing Reviews"}></Loader>
                 )
        }
    return (
        <div>
            <h1>Analyse</h1>
            <Aspiterator data = {this.props.reviews} ></Aspiterator>
        </div>
    )
    }
}

export default Analyse;
