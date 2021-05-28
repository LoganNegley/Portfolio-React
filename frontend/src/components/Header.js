import React,{useState} from 'react';
import MobileNav from './navbars/MobileNav';
import MainNav from './navbars/MainNav';
import styled from 'styled-components';

const Nav = styled.nav`
    margin:1rem 1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const Logo = styled.div`
    width:5rem;
    height:5rem;
    border-radius:25px;
    background-color:#00A997;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:3rem;
    color:white;
`;
const Icon = styled.i`
    color:#00A997;
    font-size:3.5rem;
`;


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggle = ()=>{
        setToggleMenu(true)
    }

    return (
        <header>

            <Nav>
                <Logo id='circle-logo'><a style={{color:'white'}} href='#top'>LN</a></Logo>
                    <MainNav/>
                <Icon onClick={toggle} className="fas fa-bars"></Icon>
            </Nav>
            {toggleMenu && <MobileNav setToggleMenu={setToggleMenu}/>}

        </header>
    )
}

export default Header;
