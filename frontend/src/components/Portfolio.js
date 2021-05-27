import React from 'react'
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';

const PortfolioConainer = styled.section`
    width:85%;
    margin:6rem auto;

    h3{
        color:#00A997;
        font-size:3rem;
        letter-spacing:.5rem;
    }

    #circle{
        background-color:#04808E;
        width:150px;
        height:150px;
        border-radius:50%;
        position:absolute;
        z-index:-1;
        right:-4rem;
        top:62rem;
    }
    #rectangle{
        background-color:#00A997;
        width:100px;
        height:250px;
        z-index:-1;
        position:absolute;
        bottom:-35rem;
        left:-3rem;

    }
`;


const Portfolio = () => {
    return (
        <PortfolioConainer>
            <div id='circle'></div>
            <h3 id='portfolio'>Portfolio</h3>
            <div id='rectangle'></div>
            <PortfolioCard/> 
        </PortfolioConainer>
    )
}

export default Portfolio
