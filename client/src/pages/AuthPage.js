import React, { useState } from "react";

export const AuthPage = () => {
  const [form, setForm] = useState({
    email: '', password:''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Short a link</h1>

        <div className="card">
            <div className="card-content black-text">
              <span className="card-title">Authorization</span>

              <div className="input-field">
                  <input 
                    placeholder="Type email" 
                    id="email" 
                    type="text"
                    className="black-input" 
                    onChange={changeHandler}
                  />
                  <label for="email">Email</label>
              </div>
          


              <div className="input-field">
                  <input 
                    placeholder="Type password" 
                    id="password" 
                    type="password"
                    className="black-input"
                    onChange={changeHandler}              
                  />
                  <label for="password">Password</label>
              </div>

            </div>
          <div className="card-action center">
            <button className="btn yellow darken-4 ab">Log-in</button>
            <button className="btn grey lighten-1 black-text ab">Register</button>
          </div>
        </div>

      </div>
    </div>
  );
};
