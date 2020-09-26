import React from 'react';
import { Link } from 'react-router-dom';


class SplashForm extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
     
        return(

            <div className='big_splash_container'>
                <h1 className='splash_title'>The #1 app for runners and cyclists</h1>
                <div className='splash_container'>
                    <div className='image_container'>
                        <img className='splashpic' src={window.splashURL}/>
                    </div>

                    <div className='signup_form'>
                        <Link className="splashbtn" to="/signup"><button className='signupbutton'><img className='email' src={window.emailURL} />  Sign up with email</button></Link>
                        <div className="separator">or</div>
                        <button className= 'dummybtn' onClick={()=>this.props.login(this.props.user)}>Demo User</button>

                        <p className='smalltext'>Already a member? <Link className='smalllink' to='/login'>Log in!</Link></p>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default SplashForm;