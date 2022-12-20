import React from 'react';
import {Link} from 'react-router-dom';
import './SoftSkillsTraining.css';
import Header from '../../header';

const SoftSkillsTraining = () => {
     return (
          <>
               <Header/>
               <div className='container-fluid'>
                    <div className='row'>
                         <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
                         </div>
                         <div className='col-lg-4 col-md-10 col-sm-10 col-xs-10'>
                              <img src='https://i.ibb.co/3mYZgSq/Soft-skills-training.jpg' alt='Soft-skills training' className='img-responsive sstpicture' id='sstimage'/>
                         </div>
                         <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10' id='sstinformation'>
                              <h1 id='sstheading'>
                                   Soft-skills training
                              </h1>
                              <ul>
                                   <li className='sstdescription'>
                                        Preparing for an Interview
                                   </li>
                                   <li className='sstdescription'>
                                        Building Confidence
                                   </li>
                                   <li className='sstdescription'>
                                        Achieving your Goals
                                   </li>
                                   <li className='sstdescription'>
                                        Leadership Qualities
                                   </li>
                                   <li className='sstdescription'>
                                        Team Work
                                   </li>
                                   <li className='sstdescription'>
                                        Time Management
                                   </li>
                                   <li className='sstdescription'>
                                        Communication Skills
                                   </li>
                              </ul>
                              <div id='sstformbutton'>
                                   <Link to='/placeOrder'>
                                        <button className='btn btn-outline-primary' type='button' id='sstbutton'>
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

export default SoftSkillsTraining;