import React from 'react';
import './AboutMe.css';
import Header from '../header';

const AboutMe = () => {
     return (
          <>
               <Header/>
               <div>
                    <div id='afterbio'>
                         <div>
                              <p id='bioheading'>
                                   FOUNDED BY
                              </p>
                              <div className='container-fluid'>
                                   <div className='row'>
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                             <div>
                                                  <p id='dataone'>
                                                       V K
                                                  </p>
                                                  <p id='datatwo'>
                                                       +91832***0113
                                                  </p>
                                                  <p id='datathree'>
                                                       healingblues**@gmail.com
                                                  </p>
                                             </div>
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                             <div id='bioimage'>
                                                  <img src="https://i.ibb.co/6PCjP7z/VK-in-black.png" alt='Founder' title='V K' className='img-responsive'/>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <p className='heading'>
                         QUALIFICATIONS
                    </p>
                    <ul className='container'>
                         <li className='qualione'>
                              Advance Bach Flower Therapy - 2020
                         </li>
                         <li className='qualione'>
                              Bach Flower Therapy - 2020
                         </li>
                         <li className='qualione'>
                              Career Counselling Certification - 2019 through Counselor Council of India
                         </li>
                         <li className='qualione'>
                              Life Coach and Counselling Certification - 2019
                         </li>
                         <li className='qualione'>
                              Postgraduate diploma in Counselling & Psychotherapy - 2013
                         </li>
                    </ul>
                    <div className='container-fluid'>
                         <div className='row'>
                              <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                   <div className='certimage'>
                                   <img src="https://i.ibb.co/KKTbkfx/Certificate-of-Life-Membership.png" alt='Certificate' className='img-responsive'/>
                                   </div>
                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                   <div className='certimage'>
                                   <img src="https://i.ibb.co/dL5PZT2/Certificate-Bach-Flower.png" alt='Certificate' className='img-responsive'/>
                                   </div>
                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                   <div className='certimage'>
                                   <img src="https://i.ibb.co/m50jMhK/Award-receiving.png" alt='Certificate' className='img-responsive'/>
                                   </div>
                              </div>
                              <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                   <div className='certimage'>
                                   <img src="https://i.ibb.co/DGWHqz7/Certificate-receiving.jpg" alt='Certificate' className='img-responsive'/>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default AboutMe;