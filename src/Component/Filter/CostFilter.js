import React,{Component} from 'react';
import axios from 'axios';
import './CostFilter.css';

const url = "https://healingblues-server.onrender.com/"
const high = "sortfromhigh"
const low = "sortfromlow"

class CostFilter extends Component{

     filterCost = (services) => {
          let serviceId = services.target.value;
          let serviceUrl = ""
          if(serviceId === "sortfromhigh"){
               serviceUrl = `${url}${high}`
          }else{
               serviceUrl = `${url}${low}`
          }
          axios.get(serviceUrl)
          .then((res) => {this.props.servicePerCost(res.data)})
     }

     render(){
          return(
               <>
                    <div onChange={this.filterCost}>
                         <div className='container'>
                              <div className='row filterbo'>
                                   <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
                                        <p id='filterna'>
                                             COST FILTER :
                                        </p>
                                   </div>
                                   <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                                        
                                   </div>
                                   <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                                        <label className="filterbu">
                                             <input type="radio" value="sortfromlow" name="cost"/> Low to High
                                        </label>
                                   </div>
                                   <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
                                        <label className="filterbu">
                                             <input type="radio" value="sortfromhigh" name="cost"/> High to Low
                                        </label>
                                   </div>
                              </div>
                         </div>
                    </div>
               </>
          )
     }
}

export default CostFilter;