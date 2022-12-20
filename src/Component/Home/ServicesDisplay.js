import React from 'react';
import {Link} from 'react-router-dom';

const ServicesDisplay = (props) => {

     const listcategory = ({serviceData}) => {
          console.log(">>>serviceData111",serviceData)
          if(serviceData){
               console.log(">>>serviceData",serviceData)
               return serviceData.map((item) => {
                    return(     
                         <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                              <div className='servicebox'>
                                   <Link to={`/listing/${item.id}`}>
                                        <img src={item.image} alt={item.category} className='serviceimage'/>
                                        <p className='servicename'>
                                             {item.category}
                                        </p>
                                   </Link>
                              </div>
                         </div>
                    )
               })
          }
     }

     return(
          <div>
               {listcategory(props)}
          </div> 
     )
}

export default ServicesDisplay;