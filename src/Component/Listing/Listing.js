import React,{Component} from 'react';
import axios from 'axios';
import './Listing.css';
import ListingDisplay from './ListingDisplay';
import CostFilter from '../Filter/CostFilter';
import Header from '../../header';

const productUrl = "https://healingblues-server.onrender.com/listing?category_id="

class Listing extends Component {
     constructor(props){
          super(props)
     
          this.state={
               services:``
          }
     }

     setDataPerFilter = (services) => {
          this.setState({services:services})
     }

     render(){
          return(
               <>
                    <Header/>
                    <CostFilter servicePerCost={(services) => {this.setDataPerFilter(services)}}/>
                    <ListingDisplay listData={this.state.services}/>
               </>
          )
     }

     componentDidMount(){
          let categoryId = this.props.match.params.id?this.props.match.params.id:0
          sessionStorage.setItem('categoryId',categoryId)
          axios.get(`${productUrl}${categoryId}`)
          .then((res) => {this.setState({services:res.data})})
     }
}

export default Listing;