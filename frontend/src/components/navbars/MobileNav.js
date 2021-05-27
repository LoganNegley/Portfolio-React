import React, {useState} from 'react';
import styled from 'styled-components';

const NavLinks = styled.div`
    color:white;
    background-color:#04808E;
    font-size:1.5rem;
    width:35%;
    position:absolute;
    right:0px;
    top:0px;
    height:250px;
    border-radius:75px 0 75px 0;
    z-index:110;

    #exit{
        position:absolute;
        right:10px;
        top:10px;

    }
    ul{
        position:absolute;
        right:25px;
        top:35px;
        font-size:2rem;
        }
    li{
        padding:.5rem;
    }
    a{color:white;}
`;

const MobileNav = ({setToggleMenu}) => {

    const close = ()=>{
        setToggleMenu(false)
    }

    return (
        <NavLinks className='nav-links'>
            <div onClick={close} id='exit'>X</div>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='/images/Resume.pdf' target='_blank'>Resume</a></li>
            </ul>
        </NavLinks>

    )
}

export default MobileNav;
