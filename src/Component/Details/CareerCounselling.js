import React from 'react';
import {Link} from 'react-router-dom';
import './CareerCounselling.css';
import Header from '../../header';

const CareerCounselling = () => {
     return (
          <>
               <Header/>
               <div className='container-fluid'>
                    <div className='row'>
                         <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
                         </div>
                         <div className='col-lg-4 col-md-10 col-sm-10 col-xs-10'>
                              <img src='https://i.ibb.co/4dqtK3t/Career-Counselling.jpg' alt='Career Counselling' className='img-responsive ccpicture' id='ccimage'/>
                         </div>
                         <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10' id='ccinformation'>
                              <h1 id='ccheading'>
                                   Career Counselling
                              </h1>
                              <ul>
                                   <li className='ccdescription'>
                                        <span className='ccdescriptionhead'>
                                             Career Guidance =
                                        </span>
                                        &nbsp;
                                        Career guidance can be defined as a comprehensive, developmental program designed to assist individuals in making and implementing informed educational and occupational choices.
                                   </li>
                                   <li className='ccdescription'>
                                        <span className='ccdescriptionhead'>
                                             Personal Guidance =
                                        </span>
                                        &nbsp;
                                        Personal guidance deals with all those problems of life which are not covered under educational & vocational guidance.
                                   </li>
                                   <li className='ccdescription'>
                                        <span className='ccdescriptionhead'>
                                             Career Coaching =
                                        </span>
                                        &nbsp;
                                        The goal of career coaching is to empower professionals by helping them make informed decisions about their trajectory.
                                   </li>
                                   <li className='ccdescription'>
                                        <span className='ccdescriptionhead'>
                                             Career Development =
                                        </span>
                                        &nbsp;
                                        Career development is the lifelong process of managing learning, work and transitions in order to move toward a personally determined.
                                   </li>
                              </ul>
                              <div id='ccformbutton'>
                                   <Link to='/placeOrder'>
                                        <button className='btn btn-outline-primary' type='button' id='ccbutton'>
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

export default CareerCounselling;