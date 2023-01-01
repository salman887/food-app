import React from "react";
import Home from '../images/home.svg'
import Profile from '../images/profile.svg'
import Settins from '../images/setting.svg'
import Shopping from '../images/shopping.svg'



const Footer = () => {
    return (
        <div style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            justifyContent: 'center',
            display:'flex'
        }}>
            <div style={{
                width: '40%',
                backgroundColor: 'lightgrey',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                display:'flex',
                justifyContent:'space-around',
                padding:'10px 7px 5px 7px'
            }}>
                <img src={Home} alt="" style={{width:'28px'}}/>
                <img src={Profile} alt="" style={{width:'28px'}}/>
                <img src={Settins} alt="" style={{width:'28px'}}/>
                <img src={Shopping} alt="" style={{width:'28px'}}/>

            </div>
        </div>
    );
}

export default Footer;
