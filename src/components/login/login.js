import React from "react";
import loginImg from "../../login.svg";
import "./style.scss";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: ''
  };
  }
  handleChange = (e) => {
    this.state.name=e.target.value;
    this.setState({
        [e.target.name]: e.target.value
    })
}
handleChange1 = (e) => {
  this.state.pass=e.target.value;
  this.setState({
      [e.target.pass]: e.target.value
  })
}
handlelogin = (e) => {
  console.log(this.state.name+"  "+this.state.pass );

}
  

  render() {
   

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={this.state.name}  onChange={e => this.handleChange(e)} placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={this.state.pass} onChange={e => this.handleChange1(e)} placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.handlelogin} className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
