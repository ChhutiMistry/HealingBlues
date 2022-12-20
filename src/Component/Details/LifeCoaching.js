import React from 'react';
import {Link} from 'react-router-dom';
import './LifeCoaching.css';
import Header from '../../header';

const LifeCoaching = () => {
     return (
          <>
               <Header/>
               <div className='container-fluid'>
                    <div className='row'>
                         <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
                         </div>
                         <div className='col-lg-4 col-md-10 col-sm-10 col-xs-10'>
                              <img src='https://i.ibb.co/bQk62Xz/Life-Coaching.jpg' alt='Life Coaching' className='img-responsive lcpicture' id='lcimage'/>
                         </div>
                         <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10' id='lcinformation'>
                              <h1 id='lcheading'>
                                   Life Coaching
                              </h1>
                              <ul>
                                   <li className='lcdescription'>
                                        What is life coach?
                                   </li>
                                   <p className='lcanswer'>
                                        A life coach is a type of wellness professional who helps people make progress in their lives in order to attain greater fulfillment.
                                   </p>
                                   <li className='lcdescription'>
                                        What is their profession?
                                   </li>
                                   <p className='lcanswer'> 
                                        Life Coaching is a profession that is profoundly different from consulting, mentoring, advice, therapy, or counseling. 
                                   </p>
                                   <li className='lcdescription'>
                                        How do they work?
                                   </li>
                                   <p className='lcanswer'> 
                                        Life Coaching is a designed alliance between coach and client where the coaching relationship continually gives all the power back to you. 
                                   </p>
                                   <li className='lcdescription'>
                                        What are the benefits?
                                   </li>
                                   <p className='lcanswer'> 
                                        Confidence, Self Worth, Self Esteem, Identifying & helping them achieve their Goal.
                                   </p>
                                   <li className='lcdescription'>
                                        What does it help?
                                   </li>
                                   <p className='lcanswer'> 
                                        The coaching process addresses specific personal projects, business successes, general conditions and transitions in the client's personal life.
                                   </p>
                              </ul>
                              <div id='lcformbutton'>
                                   <Link to='/placeOrder'>
                                        <button className='btn btn-outline-primary' type='button' id='lcbutton'>
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

export default LifeCoaching;