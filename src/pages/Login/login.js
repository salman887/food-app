import './index.css'
import React from 'react';
import useWindowDimensions from '../../utils/customHooks/useWindowDimensions';
import axios from 'axios';

function Login() {
  const {width} = useWindowDimensions()
    const [userData, setUserData]= React.useState({email:'', password:''})

    function handleClick(){
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
        const login = "https://v3beta.vouch365.mobi/api/login/vouch365";
        const data = {email: userData.email,
          password: userData.password}
        axios.post(login,data , headers)
        .then(response =>{
           console.log(response, "---------------->")
          })
        .catch(error => {
            console.error('There was an error!', error);
        }); 

    }
  return (
    width <= 450 ?
    <div class="font_style">
    <div class="model">
     <div class="model content">
        <div class="pic">
            <h1>Sign In</h1>
        </div>
        <br/>
        <div class="container">
            <label>Email</label>
            <input 
            class="user" 
            type="text" placeholder="Email" value={userData.email} onChange={(e) => setUserData({...userData, email:e.target.value})}/>
            <br/>
            <label>Password</label>
            <br/>
            <input class="place" type="password" placeholder="Password" value={userData.password} onChange={(e) => setUserData({...userData, password:e.target.value})}/> 
            <br/>    
            <br/>
        <button class="log" onClick={handleClick}>Login</button>
            {/* <label>
                  <p><a href="#">Forget Password </a></p>
            </label> */}
        <br/>
        <lable>
            <p>Don't have an account ?<a href="/signUp">Sign up</a></p>
        </lable>
        </div>
     </div>
    </div>
</div> : null
  );
}

export default Login;
