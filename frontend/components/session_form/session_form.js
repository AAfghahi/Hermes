import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
     
      super(props);
      this.state = {
        email: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field){
        return e => this.setState({
            [field]:e.currentTarget.value
        })
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
              <li className='errors' key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }  
    render(){
   
        return (
          <div className='login-form-actual'>
            <section className='modal'>
              <h1 className='modal_title'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                  
                  {this.renderErrors()}

                  <input type='text'
                    value={this.state.email}
                    onChange={this.update('email')}
                    className='login-input'
                    placeholder='Your Email'
                    />

                <input type='password'
                    value={this.state.password}
                    placeholder='Your Password'
                    onChange={this.update('password')}
                    className="login-input"
                    />

              <input className="session-submit" type="submit" value={this.props.formType} />
              </form>
            </section>
          </div>
        )
    }
}

export default SessionForm;