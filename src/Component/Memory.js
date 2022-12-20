import React from 'react';
import './Memory.css';
import Header from '../header';

const Memory = () => {
     return (
          <>
               <Header/>
               <div className='jumbotron'>
                    <div id='Background' className='carousel slide' data-ride='carousel'>
                         <div className='carousel-inner'>
                         <div className='item active'>
                              <img src="https://i.ibb.co/9Hr1sk6/Hall.png" alt='Memory' className='image'/>
                         </div>
                         <div className='item'>
                              <img src="https://i.ibb.co/sPJ46vw/Speaking.png" alt='Memory' className='image'/>
                         </div>
                         <div className='item'>
                              <img src="https://i.ibb.co/dpRTrB6/Ground.png" alt='Memory' className='image'/>
                         </div>
                         <div className='item'>
                              <img src="https://i.ibb.co/XtS6bGH/Classroom.png" alt='Memory' className='image'/>
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
               </div>
               <div id='box1' className='container'>
                    <img src="https://i.ibb.co/9gtFyTK/School.png" alt='Memory' id='image1' className='img-responsive'/>
               </div>
          </>
     )
}

export default Memory;