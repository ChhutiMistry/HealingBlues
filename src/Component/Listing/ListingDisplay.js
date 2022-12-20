import React from 'react';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {

     const renderData = ({listData}) => {
          if(listData){
               return listData.map((item) => {
                    return(
                         <div className='container box'>
                              <div className='row'>
                                   <div className='col-lg-5 col-md-5 col-sm-5 col-xs-12'>
                                        <img src={item.image} id='picture' alt={item.product_name}/>
                                   </div>
                                   <div className='col-lg-7 col-md-7 col-sm-7 col-xs-12'>
                                        <div id='category'>
                                             {item.category}
                                        </div>
                                        <div id='name'>
                                             {item.product_name}
                                        </div>
                                        <ul>
                                             <li id='service'>
                                                  {item.service} session
                                             </li>
                                             <li id='session'>
                                                  {item.session} service
                                             </li>
                                        </ul>
                                        <div id='cost'>
                                             Price: ₹ {item.price}
                                        </div>
                                        <button id='button'>
                                             <Link to={`/details/${item.id}`} id='mykn'>
                                                  Know more
                                             </Link>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    )
               })
          }else{return(
               <div id='loader'>
                    <img src="https://i.ibb.co/sKVGspq/Loading.gif" alt='Loading'/>
                    <h2 id='loadname'>
                         Loading....
                    </h2>
               </div>
               )
          }
     }

     return(
          <div id="listing">
               {renderData(props)}
          </div>
     )
}

export default ListingDisplay;