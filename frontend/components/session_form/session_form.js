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

    // renderErrors()  
    render(){
      debugger
        return (
          <nav>
              <form onSubmit={this.handleSubmit}>
              Use {this.props.formType} or {this.props.navLink}
              <label>Email:
                <input type='text'
                    value={this.state.username}
                    onChange={this.update('email')}
                    />
              </label>
              <label>Password:
                <input type='password'
                    value={this.state.password}
                    onChange={this.update('password')} 
                    />
              </label>
              <input type='submit' value={this.props.formType}/>

              </form>

          </nav>
        )
    }
}

export default SessionForm;