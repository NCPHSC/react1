// import e from 'cors';
import React,{useState} from 'react';
import { useNavigate  } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async(e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      email,password
    })
    });
    const data = res.json();
    if(res.status===400 || !data){
      window.alert("Invalid Credentials");
    }else{
      window.alert("Login Successful");
      navigate("/");
    }
  }


  return (
    <>

      <div className="login-dev">
        <form method="POST" className="container1">
          <div className="container-item1">
          <h2>Login</h2>
          </div>
          <div className="container-item1">
            <label htmlFor="">Email:</label>
          </div>
          <div className="container-item1">
            <input type="text" className="input-item" 
            value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="Your Email"/>
          </div>

          <div className="container-item1">
            <label htmlFor="">Password:</label>
          </div>
          <div className="container-item1">
            <input type="password" className="input-item" 
            value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password" />
          </div>

          <div className="container-item1">
            <button className="button-item" onClick={loginUser}>Login</button>
          </div>
        </form>

        </div>
    </>
  )
}

export default Login