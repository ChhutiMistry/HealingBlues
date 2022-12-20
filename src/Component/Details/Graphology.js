import React from 'react';
import {Link} from 'react-router-dom';
import './Graphology.css';
import Header from '../../header';

const Graphology = () => {
     return (
          <>
               <Header/>
               <div className='container-fluid'>
                    <div className='row'>
                         <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'>
                         </div>
                         <div className='col-lg-4 col-md-10 col-sm-10 col-xs-10'>
                              <img src='https://i.ibb.co/xhQGzsZ/Handwriting-Analysis.png' alt='Handwriting Analysis' className='img-responsive gpicture' id='gimage'/>
                         </div>
                         <div className='col-lg-5 col-md-10 col-sm-10 col-xs-10' id='ginformation'>
                              <h1 id='gheading'>
                                   Graphology
                              </h1>
                              <p className='gdescription'>
                                   Graphology is the analysis of the physical characteristics and patterns of handwriting with attempt to identify the writer, indicate the psychological state at the time of writing, or evaluate personality characteristics. It is generally considered a pseudoscience.
                              </p>
                              <div id='gformbutton'>
                                   <Link to='/placeOrder'>
                                        <button className='btn btn-outline-primary' type='button' id='gbutton'>
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

export default Graphology;