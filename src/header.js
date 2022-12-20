import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import DarkMode from './Component/Theme change/DarkMode';
import './Header.css';

const url = "https://healingblues-userregistration.onrender.com/api/auth/userinfo"

class Header extends Component {

     constructor(){
          super()

          this.state={
               userData:''
          }
     }

     handleLogout = () => {
          sessionStorage.removeItem('ltk')
          sessionStorage.removeItem('userInfo')
          sessionStorage.setItem('loginStatus',false)
          this.setState({userData:''})
          this.props.history.push('/')
     }

     conditionalHeader = () => {
          if(this.state.userData.name){
                    let data = this.state.userData;
                    let outArray = [data.name, data.email, data.phone, data.role];
                    sessionStorage.setItem('userInfo',outArray)
                    sessionStorage.setItem('loginStatus',true)
                    return(
                         <>
                              <span>
                                   <Link to='/' className='btnna'>
                                        <span className='glyphicon glyphicon-user'></span> &nbsp;
                                        Hi {data.name} !
                                   </Link>
                              </span> &nbsp;
                              <span>
                                   <button onClick={this.handleLogout} className='btnlo'>
                                        Logout &nbsp;
                                        <span className='glyphicon glyphicon-log-out'></span>
                                   </button>
                              </span> &nbsp;
                         </>
                    )
          }else{
               return(
                    <>
                         <span>
                              <Link to='/login' className='btnli'>
                                   <span className='glyphicon glyphicon-log-in'></span>&nbsp;
                                   Login
                              </Link>
                         </span> &nbsp;
                         <span>
                              <Link to='/register' className='btnre'>
                                   Register &nbsp;
                                   <span className='glyphicon glyphicon-user'></span>
                              </Link>
                         </span> &nbsp;
                    </>
               )
          }
     }

     render(){
          return (
               <>
                    <header>
                         <img src='https://i.ibb.co/h1Gdzb7/HB-logo.png' alt='Logo of Healing Blues' title='Healing Blues' id='logo'/>
                         <div id='headname'>
                              <h1>
                                   <Link to='/' id='hyperlink'>
                                        HEALING BLUES
                                   </Link>
                              </h1>
                         </div>
                         <div id='social'>
                              <a href='https://www.facebook.com/healingbluesbyvinitkaur/' target='_blank' rel='noreferrer noopener'>
                                   <img src='https://i.ibb.co/VVBXfCD/Facebook.png' alt='Facebook logo' className='slogo'/>
                              </a> &nbsp;
                              <a href='https://www.instagram.com/healing_blues_by_vinitkaur/' target='_blank' rel='noreferrer noopener'>
                                   <img src='https://i.ibb.co/ckYtKLd/Instagram.png' alt='Instagram logo' className='slogo'/>
                              </a> &nbsp;
                              <a href='https://wa.me/918329840113/' target='_blank' rel='noreferrer noopener'>
                                   <img src='https://i.ibb.co/pjyZ5zf/WhatsApp.png' alt='WhatsApp logo' className='slogo'/>
                              </a> &nbsp;
                              <a href='https://www.linkedin.com/company/healingbluesbyvinitkaur/' target='_blank' rel='noreferrer noopener'>
                                   <img src='https://i.ibb.co/c8N4dfx/LinkedIn.png' alt='LinkedIn logo' className='slogo'/>
                              </a> &nbsp;
                         </div>
                    </header>
                    <div id='subheading'>
                         <span className='subhead'>
                              <Link to={`/aboutme`} className='hyperserve'>About me</Link>
                         </span>
                         <span className='subhead'>
                              <Link to={`/memory`} className='hyperserve'>Memories</Link>
                         </span>
                         <span className='subhead'>
                              <Link to={`/listing/0`} className='hyperserve'>Services</Link>
                         </span>
                         <span className='subhead'>
                              <button type='button' className='hyperservee'>
                                   <DarkMode/>
                              </button>
                         </span>
                         <span>
                              {this.conditionalHeader()}
                         </span>
                    </div>
               </>
          )
     }

     componentDidMount(){
          fetch(url,{
               method: 'GET',
               headers:{
                    'your-access-token': sessionStorage.getItem('ltk')
                    }
               })
               .then((res) => res.json())
               .then((data) => {
                    this.setState({userData:data})
               })
          }
     }

export default withRouter(Header);