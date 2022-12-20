import React from 'react';
import {Link} from 'react-router-dom';
import './CounsellingandPsychotherapy.css';
import Header from '../../header';

const CounsellingandPsychotherapy = () => {
     return (
          <>
               <Header/>
               <div className='container-fluid'>
                    <div className='row'>
                         <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
                         </div>
                         <div className='col-lg-4 col-md-10 col-sm-10 col-xs-10'>
                              <img src='https://i.ibb.co/cb3JVPX/Counselling-and-Psychotherapy.jpg' alt='Counselling and Psychotherapy' className='img-responsive cppicture' id='cpimage'/>
                         </div>
                         <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10' id='cpinformation'>
                              <h1 id='cpheading'>
                                   Counselling and Psychotherapy
                              </h1>
                              <ul>
                                   <li className='cpdescription'>
                                        Child & Parent Counselling
                                   </li>
                                   <li className='cpdescription'>
                                        Inter & Intrapersonal Relationships
                                   </li>
                                   <li className='cpdescription'>
                                        Stress Management
                                   </li>
                                   <li className='cpdescription'>
                                        Anger Management
                                   </li>
                                   <li className='cpdescription'>
                                        Depression / Anxiety
                                   </li>
                                   <li className='cpdescription'>
                                        Trauma
                                   </li>
                                   <li className='cpdescription'>
                                        Dealing with Emotional stress due to an injury/disease
                                   </li>
                                   <li className='cpdescription'>
                                        Dealing with Stress of care taker
                                   </li>
                                   <li className='cpdescription'>
                                        Drastic change in lifestyle/schedule/habits
                                   </li>
                                   <li className='cpdescription'>
                                        Addictions
                                   </li>
                              </ul>
                              <div id='cpformbutton'>
                                   <Link to='/placeOrder'>
                                        <button className='btn btn-outline-primary' type='button' id='cpbutton'>
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

export default CounsellingandPsychotherapy;