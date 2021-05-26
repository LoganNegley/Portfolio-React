import React, {useState} from 'react';
import styled from 'styled-components';

const NavLinks = styled.div`
    color:white;
    background-color:#04808E;
    font-size:1.5rem;
    width:25%;
    position:absolute;
    right:0px;
    top:0px;
    height:200px;
    border-radius:75px 0 75px 0;

    #exit{
        position:absolute;
        right:10px;
        top:5px;

    }
    ul{
        position:absolute;
        right:5px;
        top:25px;
        font-size:1.75rem;
        }
    li{
        padding:.5rem;
    }
`;

const MobileNav = ({setToggleMenu}) => {

    const close = ()=>{
        setToggleMenu(false)
    }

    return (
        <NavLinks className='nav-links'>
            <div onClick={close} id='exit'>X</div>
            <ul>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </NavLinks>

    )
}

export default MobileNav;