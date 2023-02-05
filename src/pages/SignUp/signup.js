import './index.css'
import React from 'react';
import useWindowDimensions from '../../utils/customHooks/useWindowDimensions';
async function fetchCities(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
function SignUp() {
    const {width} = useWindowDimensions()
    const [userdata, setUserData]= React.useState({gender:'male',fName:'', lName:'', city:'karachi',dob:'1992-02-28', phone:'234234234', password:'', email:''})
    const [cities, setCities]= React.useState([])
    React.useEffect(() => {

        fetchCities('https://v3beta.vouch365.mobi/api/cities', { })
       .then((data) => {
        setCities(data.data)
  });
    }, [])
    function handleClick(){
        const login = "https://v3beta.vouch365.mobi/api/register/vouch365";
        const c_id = cities.find(item => item.name === userdata.city)
        debugger
        fetch(login, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              Accept:'*/*'
            //   'Content-Type': 'application/x-www-form-urlencoded',
            },
          body: JSON.stringify({
            email: userdata.email,
            password: userdata.password,
            lname:userdata.lName,
            fname:userdata.fName,
            dob:userdata.dob,
            city_id:c_id.id,
            gender:userdata.gender,
            phone:userdata.phone
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // code here //
            if (data.error) {
              alert("Error Password or Username"); /*displays error message*/
            } else {
        /*opens the target page while Id & password matches*/
            }
          })
          .catch((err) => {
            console.log(err);
          });        
    }
    return (
        width <=450 ?
        <div class="font_style">
            <div class="model">
                <form class="model content">
                   
                    <div class="pic">
                    <img src='https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg' height={70}/>
                        <h1 className='
                        '>
                            Sign Up
                        </h1>
                    </div>
                    <div class="container">
                        <label>
                            First name
                        </label>
                        <input class="user" type="text" placeholder="First name" value={userdata.fName} onChange={(e)=> setUserData({...userdata, fName:e.target.value})} />

                        <label>
                            Last name
                        </label>
                        <input class="place" type="text" placeholder="Last name" value={userdata.lName} onChange={(e)=> setUserData({...userdata, lName:e.target.value})} />

                        <label>
                            Email
                        </label>
                        <input class="place" type="text" placeholder="Email" value={userdata.email} onChange={(e)=> setUserData({...userdata, email:e.target.value})}  />

                        <label>
                            Password
                        </label>
                        <input class="place" type="password" placeholder="Password" value={userdata.phone} onChange={(e)=> setUserData({...userdata, phone:e.target.value})}  />

                        <label>
                            Phone Number
                        </label>
                        <input class="place" type="number" placeholder="Phone number" value={userdata.password} onChange={(e)=> setUserData({...userdata, password:e.target.value})}  />

                        <label>
                            Cities
                        </label>
                        <br />
                        
                        <select className="select" value={userdata.city} onChange={(e) => {setUserData({...setUserData, city:e.target.value})}}>
                          {cities && cities.map(item => (
                            <option value={item.name}>{item.name}</option>
                          ))}

                        </select>

                        <label>
                            Gender
                        </label>
                        <br />
                        
                        <select className="select" value={userdata.gender} onChange={(e) => {setUserData({...setUserData, gender:e.target.value})}}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Others</option>

                        </select>


                        <button className="log" onClick={()=> handleClick()}>
                            Register
                        </button>
                        <lable>
                            <p>Already have an account <a href="/login">Sign In</a></p>
                        </lable>
                    </div>
                </form>
            </div>


        </div> : null
    );
}

export default SignUp;
