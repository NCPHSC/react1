import React, {useState} from 'react';
import '../App.css';
import logo from './images/loginimg.jpg';
import { useNavigate  } from 'react-router-dom';
// import { useHistory } from 'history';




  const Signup = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
      name:"", email:"", phone:"", work:"", password:"", cpassword:""
    });
  
    let iname, value;
  const handleInputs = (e) =>{
    console.log(user);
    iname = e.target.name;
    value = e.target.value;

    setUser({...user, [iname]:value});
  }

const PostData = async (e) => {
  e.preventDefault();

  const {name, email, phone, work, password, cpassword} = user;
  const res = await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      name, email, phone, work, password, cpassword
    })
  });
  const data = await res.json();
  if(data.status===422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");
  }else{
    window.alert("Registration Successful");
    console.log("Registration Successful");

    navigate("/login");
  }
}



  return (
    <>
        <div className="signup-item">
        <form method="POST" className="container">
        <h3>Sign up</h3>

          <div className="container-item">
            <label htmlFor="">Full Name:</label>
          </div>
          <div className="container-item">
            <input type="text" className="input-item" 
            name='name'
            value={user.name}
            onChange={handleInputs}
            placeholder="Your Name"/>
          </div>

          <div className="container-item">
            <label htmlFor="">Email:</label>
          </div>
          <div className="container-item">
            <input type="text" className="input-item"
            name='email'
             value={user.email}
             onChange={handleInputs}
            placeholder="Your Email"/>
          </div>

          <div className="container-item">
            <label htmlFor="">Phone:</label>
          </div>
          <div className="container-item">
            <input type="text" className="input-item" 
            name='phone'
             value={user.phone}
             onChange={handleInputs}
            placeholder="Your Phone"/>
          </div>

          <div className="container-item">
            <label htmlFor="">Profession:</label>
          </div>
          <div className="container-item">
            <input type="text" className="input-item"
            name='work'
             value={user.work}
             onChange={handleInputs}
            placeholder="Your Profession" />
          </div>

          <div className="container-item">
            <label htmlFor="">Password:</label>
          </div>
          <div className="container-item">
            <input type="password" className="input-item" 
            name='password'
             value={user.password}
             onChange={handleInputs}
            placeholder="Password" />
          </div>

          <div className="container-item">
            <label htmlFor="">Confirm Password:</label>
          </div>
          <div className="container-item">
            <input type="password" className="input-item" 
            name='cpassword'
             value={user.cpassword}
             onChange={handleInputs}
            placeholder="Confirm Password" />
          </div>
          
          <div className="container-item">
            <button className="button-item" onClick={PostData}>Sign Up</button>
          </div>
        </form>
        
          <img src={logo} alt="logo" className="sign-image"/>
        </div>
    </>
  )
}

export default Signup