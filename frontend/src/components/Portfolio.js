import React from 'react'
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';
import projects from '../projects';

const PortgolioContainer= styled.div`
        @media(min-width: 1200px){
            width:90%;
            margin:0 auto;
        }
    h3{
        color:#00A997;
        font-size:3rem;
        letter-spacing:.5rem;
        margin-bottom:3rem;

            @media(min-width: 900px){
                font-size:3.75rem;
            }


    }
`;

const PortfolioWrapper = styled.section`
    width:85%;
    margin:0 auto;
        @media(min-width: 768px){
            display:flex;
            flex-flow:wrap row;
            justify-content:space-evenly;
        }


`;


const Portfolio = () => {
    const listProjects = projects;

    return (
        <PortgolioContainer>
        <h3 id='portfolio'>Portfolio</h3>
        <PortfolioWrapper>
            {listProjects.map(project =>(
                <PortfolioCard project={project}/>
            ))} 
        </PortfolioWrapper>
        </PortgolioContainer>
    )
}

export default Portfolio
