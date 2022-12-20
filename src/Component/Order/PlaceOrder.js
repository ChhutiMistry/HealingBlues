import React,{Component} from 'react';
import './PlaceOrder.css';
import Header from '../../header';

const purl = 'https://healingblues-server.onrender.com/placeOrder/';

class PlaceOrder extends Component {

     constructor(props){
          super(props)

          this.state={
               id:Math.floor(Math.random()*100000),
               service_name:`Appointment Charge`,
               name:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[0]:'',
               email:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:'',
               cost:100,
               phone:sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[2]:'',
          }
     }

     handleChange=(event) => {
          this.setState({[event.target.name]:event.target.value})
     }

     checkout = () => {
          console.log(this.state)
          let obj = this.state;
          obj.service_name = `Registration`
          fetch(purl,{
               method:'POST',
               headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
               },
               body:JSON.stringify(obj)
          })
          .then(console.log('order Added'))
     }

     render(){
          if(!sessionStorage.getItem('loginStatus')){
               return(
                    <div>
                         <Header/>
                         <p id='firstlog'>
                              Login First To Continue
                         </p>
                    </div>
               )
          }
          return (
               <>
                    <Header/>
                    <div id='mybut'>
                         <button className='btn btn-outline-primary' type='button' id='plbutton' data-toggle='modal' data-target='#mymodal'>
                              BOOK APPOINTMENT
                         </button>
                    </div>
                    <div id='mymodal' className='modal fade' role='dialog'>
                         <div className='modal-dialog'>
                              <div className='modal-content'>
                                   <div className='modal-header'>
                                        <button className='close' data-dismiss='modal'>
                                             &times;
                                        </button>
                                        <h4 className='modal-title'>
                                             Appointment Booking
                                        </h4>
                                   </div>
                                   <div className='modal-body'>
                                        <form action='https://healingblues-paymentgateway.onrender.com/paynow' method='POST'>
                                             <input type='hidden' name='cost' value={this.state.cost}/>
                                             <input type='hidden' name='id' value={this.state.id}/>
                                             <input type='hidden' name='service_name' value={this.state.service_name}/>
                                             <div className='row'>
                                                  <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                                       <div className='form-group'>
                                                            <label className='control-label' htmlFor='firstname'>
                                                                 First Name *
                                                            </label>
                                                            <input type='text' className='form-control' placeholder='First Name' name='name' value={this.state.name} onChange={this.handleChange} required/>
                                                       </div>
                                                  </div>
                                                  <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                                       <div className='form-group'>
                                                            <label className='control-label' htmlFor='lastname'>
                                                                 Last Name *
                                                            </label>
                                                            <input type='text' className='form-control' placeholder='Last Name' name='lastname' required/>
                                                       </div>
                                                  </div>
                                                  <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                                       <div className='form-group'>
                                                            <label className='control-label' htmlFor='email'>
                                                                 Email Address *
                                                            </label>
                                                            <input type='email' className='form-control' placeholder='Email Address' name='email' value={this.state.email} onChange={this.handleChange} required/>
                                                       </div>
                                                  </div>
                                                  <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                                                       <div className='form-group'>
                                                            <label className='control-label' htmlFor='number'>
                                                                 Contact Number *
                                                            </label>
                                                            <input type='digits' className='form-control' placeholder='Contact Number' name='phone' minLength='10' value={this.state.phone} onChange={this.handleChange} required/>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className='form-group'>
                                                  <label className='control-label' htmlFor='date'>
                                                       Date of Birth
                                                  </label>
                                                  <input type='date' className='form-control' name='date'/>
                                             </div>
                                             <div className='form-group'>
                                                  <label className='control-label' htmlFor='message'>
                                                       Message
                                                  </label>
                                                  <textarea rows='3' type='text' className='form-control' placeholder='Anything you would like to convey'></textarea>
                                             </div>
                                             <div id='mybutton'>
                                                  <button type='submit' className='btn btn-success fbutton' onClick={this.checkout}>
                                                       Submit and proceed for payment
                                                  </button>
                                             </div>
                                        </form>
                                   </div>
                                   <div className='modal-footer'>
                                        <span className='payment'>
                                             * A payment of ₹ 100 is required to
                                        </span>
                                        &nbsp;
                                        <span id='paymentc'>
                                             CONFIRM
                                        </span>
                                        &nbsp;
                                        <span className='payment'>
                                             this Appointment *
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </>
          )
     }
}

export default PlaceOrder;