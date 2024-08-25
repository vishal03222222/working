import React, { Component } from 'react';

class IDAndPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      showPassword: false,
    };
  }

  handleIDChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { id, password, showPassword } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Hide and show password</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={this.handlePasswordChange}
            placeholder="Enter your password"
            style={{
              padding: '10px',
              width: '300px',
              marginBottom: '10px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={this.toggleShowPassword}
            id="showPassword"
          />
          <label
            htmlFor="showPassword"
            style={{ marginLeft: '10px', fontSize: '16px' }}
          >
            Show Password
          </label>
        </div>
      </div>
    );
  }
}

export default IDAndPassword;
