import './index.css'
import React from 'react';
import useWindowDimensions from '../../utils/customHooks/useWindowDimensions';

function Login() {
  const {width} = useWindowDimensions()
    const [userData, setUserData]= React.useState({email:'', password:''})
    function handleClick(){
        const login = "https://v3beta.vouch365.mobi/api/login/vouch365";
        debugger
        fetch(login, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              // Accept:'*/*'
            //   'Content-Type': 'application/x-www-form-urlencoded',
            },
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
          
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
        debugger

            // code here //
            if (data.error) {
              debugger
              alert("Error Password or Username"); /*displays error message*/
            } else {
        /*opens the target page while Id & password matches*/
            }
          })
          .catch((err) => {
        debugger

            console.log(err);
          });        
    }
  return (
    width <= 450 ?
    <div class="font_style">
    <div class="model">
     <form class="model content">
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
     </form>
    </div>
</div> : null
  );
}

export default Login;
