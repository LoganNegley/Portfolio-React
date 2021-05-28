import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
    display:none;
    ul{
        display:flex;
        flex-flow:row no-wrap;
        padding-left:0px;
        li{
            margin: 0px .75rem;
            font-size:1.30rem;
        a{
            color:white;
        }
        }
    }
`;

const MainNav = () => {
    return (
        <Nav>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='/images/Resume.pdf' target='_blank'>Resume</a></li>
            </ul>
        </Nav>
    )
}

export default MainNav
