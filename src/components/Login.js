import React from 'react'

const Login = () => {
  return (
    <>

      <div className="login-dev">
        <form className="container1">
          <div className="container-item1">
          <h2>Login</h2>
          </div>
          <div className="container-item1">
            <label htmlFor="">Email:</label>
          </div>
          <div className="container-item1">
            <input type="text" className="input-item" placeholder="Your Email"/>
          </div>

          <div className="container-item1">
            <label htmlFor="">Password:</label>
          </div>
          <div className="container-item1">
            <input type="password" className="input-item" placeholder="Password" />
          </div>

          <div className="container-item1">
            <button className="button-item">Login</button>
          </div>
        </form>

        </div>
    </>
  )
}

export default Login