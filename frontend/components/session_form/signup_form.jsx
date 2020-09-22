import React from 'react';
import {Link} from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
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
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  
    render() {
      return (
        <div className="login-form-container">
          
          <section className='modal'>
            <h1 className='modal_title'>Join Hermes today, it's Free!</h1>
              <form onSubmit={this.handleSubmit} className="signup_modal">
              
                <br/>
                {this.renderErrors()}
                <div className="login-form">
                  <br/>
                    <input type="text"
                      value={this.state.email}
                      placeholder='Your Email'
                      onChange={this.update('email')}
                      className="login-input"
                    />
                  <br/>
                    <input type="password"
                      value={this.state.password}
                      placeholder='Your Password'
                      onChange={this.update('password')}
                      className="login-input"
                    />
                  <br/>
                  <input className="session-submit" type="submit" value={this.props.formType} />
                </div>
              </form>
          </section>
        </div>
      );
    }
  }
  
  export default SignUpForm;
  