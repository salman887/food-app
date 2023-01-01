import React from "react";
import Bell from '../../images/headerBell.svg'
import Heart from '../../images/headerHeart.svg'
import Phone from '../../images/headerPhone.svg'
import Profile from '../../images/headerProfile.svg'

const Header = () => {
    return (
        <div style={{ display: 'flex', flexDireaction: 'row' }}>
            <div style={{width: '70%', display:'flex', lineHeight: '30.49px', }}>
            <h2 style={{ fontWeight: '400', fontSize: '28.82px',  }}>Hello, </h2>

            <h2 style={{ fontWeight: 'bold', fontSize: '28.82px', }}>Salman Nasir</h2>
            </div>
            <div style={{ display: 'flex',alignItems:'center', justifyContent:'end', width:'30%' }}>
                <img src={Phone} style={{ width:'22px', marginRight:'8px'}} alt="logo" />
                <img src={Heart} style={{ width:'22px',  marginRight:'8px'}} alt="logo" />
                <img src={Profile} style={{ width:'22px',  marginRight:'8px'}} alt="logo" />
                <img src={Bell} style={{ width:'22px',  marginRight:'8px'}} alt="logo" />

            </div>
        </div>
    );
}

export default Header;
