import React from 'react';
import {Link} from 'react-router-dom';
import './BachFlower.css';
import Header from '../../header';

const BachFlower = () => {
     return (
          <>
               <Header/>
               <div className='container-fluid'>
                    <div className='row'>
                         <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
                         </div>
                         <div className='col-lg-4 col-md-10 col-sm-10 col-xs-10'>
                              <img src='https://i.ibb.co/fCPDR3Y/Bach-Flower-Therapy.jpg' alt='Bach Flower Therapy' className='img-responsive bftpicture' id='bftimage'/>
                         </div>
                         <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10' id='bftinformation'>
                              <h1 id='bftheading'>
                                   Bach Flower Therapy
                              </h1>
                              <cite id='bftquote'>
                                   ' The complete emotional healing system using simple nature. Healing is intended to treat the person rather than the disease, the cause rather than the effect. Be a Happier You '
                              </cite>
                              <ul>
                                   <li className='bftdescription'>
                                        Face your Fears
                                   </li>
                                   <li className='bftdescription'>
                                        Know your Mind
                                   </li>
                                   <li className='bftdescription'>
                                        Live the Day
                                   </li>
                                   <li className='bftdescription'>
                                        Reach out to Others
                                   </li>
                                   <li className='bftdescription'>
                                        Stand your Ground
                                   </li>
                                   <li className='bftdescription'>
                                        Find Joy & Hope
                                   </li>
                                   <li className='bftdescription'>
                                        Live & Let Live
                                   </li>
                              </ul>
                              <div id='bftformbutton'>
                                   <Link to='/placeOrder'>
                                        <button className='btn btn-outline-primary' type='button' id='bftbutton'>
                                             Proceed for Booking
                                        </button>
                                   </Link>
                              </div>
                         </div>
                         <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
                         </div>
                    </div>
               </div>
          </>
     )
}


export default BachFlower;