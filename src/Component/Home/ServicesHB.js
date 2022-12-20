import React,{Component} from 'react';
import axios from 'axios';
import './ServicesHB.css';
import ServicesDisplay from './ServicesDisplay';

const url = "https://healingblues-server.onrender.com/category/"

class ServicesHB extends Component{

     constructor(props){
          super(props)

          this.state={
               categoryType:''
          }
     }

     render(){
          return(
               <div>
                    <div className='bioheading'>
                         <div id='myservice'>
                              SERVICES
                         </div>
                    </div>
                    <ServicesDisplay serviceData={this.state.categoryType}/>
               </div>
          )
     }

     componentDidMount(){
          axios.get(`${url}`)
          .then((res) => {this.setState({categoryType:res.data})})
     }
}

export default ServicesHB;