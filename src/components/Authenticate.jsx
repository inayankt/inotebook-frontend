import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/User";
import { ApiContext } from "../contexts/Api";
import { LoaderContext } from "../contexts/Loader";

function Authenticate() {
  const [error, setError] = useState("");
  const loader = useContext(LoaderContext);
  const user = useContext(UserContext);
  const api_url = useContext(ApiContext);
  const [signInData, setSignInData] = useState({email: "", password: "", remember: false});
  const [signUpData, setSignUpData] = useState({name: "",email: "", password: "", remember: false});
  const handleSigninChange = (e) => {
    if(e.target.name === "remember") {
      return setSignInData(prevData => {
        return {...prevData, [e.target.name]: e.target.checked}
      });
    }
    setSignInData(prevData => {
      return {...prevData, [e.target.name]: e.target.value}
    });
  };
  const handleSignupChange = (e) => {
    if(e.target.name === "remember") {
      return setSignUpData(prevData => {
        return {...prevData, [e.target.name]: e.target.checked}
      });
    }
    setSignUpData(prevData => {
      return {...prevData, [e.target.name]: e.target.value}
    });
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    loader.setProgress(10);
    try {
      const response = await axios.post(`${api_url}/api/auth/login`, signInData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      loader.setProgress(60);
      if(signInData.remember) localStorage.setItem("user", response.data.authToken);
      loader.setProgress(80);
      user.setToken(response.data.authToken);
    } catch(err) {
      console.log(err.response.data);
      setError(err.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    loader.setProgress(100);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    loader.setProgress(10);
    try {
      const response = await axios.post(`${api_url}/api/auth/register`, signUpData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      loader.setProgress(60)
      if(signUpData.remember) localStorage.setItem("user", response.data.authToken);
      loader.setProgress(80);
      user.setToken(response.data.authToken);
    } catch(err) {
      console.log(err.response.data);
      setError(err.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    loader.setProgress(100);
  };
  return (
    <div className="auth-container">
      {error && <div className="error-msg">{error}</div>}
      <div className="container auth-sub-container">
        <div className="row" style={{fontSize: "1.5rem"}}>iNoteBook</div>
        <div className="row text-muted">Please sign in or sign up</div>
        <div className="row form-row">
          <form className="col-12 col-sm-5 form-col">
            <center><h5>Sign in</h5></center>
            <input name="email" type="email" className="form-control input-common form-height" placeholder="example@email.com" value={signInData.email} onChange={handleSigninChange} required />
            <input name="password" type="password" className="form-control input-common form-height" placeholder="Password" value={signInData.password} onChange={handleSigninChange} required />
            <div className="remember-div">
              <input type="checkbox" name="remember" checked={signInData.remember} onChange={handleSigninChange} />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary auth-main-btn form-height" onClick={handleSignIn}>Sign in</button>
          </form>
          <div className="col-12 col-sm-2 form-mid-col text-muted"><span>or</span></div>
          <form className="col-12 col-sm-5 form-col">
            <center><h5>Sign up</h5></center>
            <input name="name" type="text" className="form-control input-common form-height" placeholder="Name" value={signUpData.name} onChange={handleSignupChange} required />
            <input name="email" type="email" className="form-control input-common form-height" placeholder="example@email.com" value={signUpData.email} onChange={handleSignupChange} required />
            <input name="password" type="password" className="form-control input-common form-height" placeholder="Password" value={signUpData.password} onChange={handleSignupChange} required />
            <div className="remember-div">
              <input type="checkbox" name="remember" checked={signUpData.remember} onChange={handleSignupChange} />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary auth-main-btn form-height" onClick={handleSignUp}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Authenticate;