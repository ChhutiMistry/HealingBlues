import React from 'react';
import './Home.css'
import ServicesHB from './ServicesHB';
import Header from '../../header';

const Home = () => {
     return (
          <>
               <Header/>
               <div>
                    <div>
                         <div id='Background' className='carousel slide' data-ride='carousel'>
                              <div className='carousel-inner'>
                              <div className='item active'>
                                   <img src="https://i.ibb.co/fXgq09Q/Background2.jpg" alt='Background' className='backgroundimage'/>
                              </div>
                              <div className='item back'>
                                   <img src="https://i.ibb.co/Rbwkg4y/HBback1.png" alt='Background' className='backgroundimage'/>
                              </div>
                              <div className='item back'>
                                   <img src="https://i.ibb.co/VMhk4Kc/HBback2.png" alt='Background' className='backgroundimage'/>
                              </div>
                              <div className='item back'>
                                   <img src="https://i.ibb.co/kS1MqMj/Background1.jpg" alt='Background' className='backgroundimage'/>
                              </div>
                              </div>
                              <a className='left carousel-control' href='#Background' data-slide='prev'>
                              <span className='glyphicon glyphicon-hand-left handreview'>
                              </span>
                              </a>
                              <a className='right carousel-control' href='#Background' data-slide='next'>
                              <span className='glyphicon glyphicon-hand-right handreview'>
                              </span>
                              </a>
                         </div>
                         <ServicesHB/>
                    </div>
                    <div className='afterbio'>
                         <p className='bioheading'>
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
                    <p className='bioheading' id='myreview'>
                         TESTIMONIALS
                    </p>
                    <div className='jumbotron'>
                         <div id='Feedbacks' className='carousel slide' data-ride='carousel'>
                              <div className='carousel-inner'>
                              <div className='item active revew'>
                                   <img src="https://i.ibb.co/nPnt98B/How-can-HB-help.png" alt='Review' className='reviewimage'/>
                              </div>
                              <div className='item revew'>
                                   <img src="https://i.ibb.co/hM14ZqH/Review1.png" alt='Review' className='reviewimage'/>
                              </div>
                              <div className='item revew'>
                                   <img src="https://i.ibb.co/njFZ1jT/Review2.png" alt='Review' className='reviewimage'/>
                              </div>
                              <div className='item revew'>
                                   <img src="https://i.ibb.co/3F7M6SJ/Review5.png" alt='Review' className='reviewimage'/>
                              </div>
                              <div className='item revew'>
                                   <img src="https://i.ibb.co/ZSG25VM/Review4.png" alt='Review' className='reviewimage'/>
                              </div>
                              <div className='item revew'>
                                   <img src="https://i.ibb.co/Tq9gRXH/Review3.png" alt='Review' className='reviewimage'/>
                              </div>
                              <div className='item revew'>
                                   <img src="https://i.ibb.co/0BJpHVv/Vinit-s-HB.png" alt='Review' className='reviewimage'/>
                              </div>
                              </div>
                              <a className='left carousel-control' href='#Feedbacks' data-slide='prev'>
                              <span className='glyphicon glyphicon-hand-left handreview'>
                              </span>
                              </a>
                              <a className='right carousel-control' href='#Feedbacks' data-slide='next'>
                              <span className='glyphicon glyphicon-hand-right handreview'>
                              </span>
                              </a>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Home;