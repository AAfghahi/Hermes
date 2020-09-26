import React from 'react';
import Footer from '../footer/footer'
import {Link} from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
      
      super(props);
      this.state = {
        email: '',
        password: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
   
    }
  
    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }
   
    renderErrors() {
      return(
        <ul className='login-errors'>
          {this.props.errors.map((error, i) => (
            <li className='errors' key={`error-${i}`}>
              {error}
              <br/>
            </li>
          ))}
        </ul>
      );
    }
  
    render() {
      return (
        <div className="login-form-container">
          

          <section className='modal'>
              <h1 className='modal_title'>Join Hermes today,<br/>
               it's Free.</h1>
              <form onSubmit={this.handleSubmit} className="signup_modal">
              
                <br/>
                {this.renderErrors()}
             
                  <br/>
                    <input type="text"
                      value={this.state.email}
                      placeholder='Email'
                      onChange={this.update('email')}
                      className="login-input-signup"
                    />
                  <br/>
                    <input type="password"
                      value={this.state.password}
                      placeholder='Password'
                      onChange={this.update('password')}
                      className="login-input-signup"
                    />
                  <br/>
                  <input className="session-submit-signup" type="submit" value={this.props.formType} />

              </form>
          </section>
          </div>
      );
    }
  }
  
  export default SignUpForm;
  