import React from 'react'
import styled from 'styled-components';


// Styles
const HeroContainer= styled.section`
    width:100%;
    margin:0 auto;

        @media(min-width: 900px){
            display:flex;
            justify-content:space-around;
            align-items:center;
            margin-bottom:7rem;
        }
            @media(min-width: 1024px){
                justify-content:space-between;
            }

    .top{
        width:85%;
        margin:0 auto;
        text-align:center;

            @media(min-width: 900px){
                width:50%;
                margin-top:4rem;
            }
            @media(min-width: 1024px){
                width:30%;

            }
    }

    .bottom{
        width:90%;
        text-align:center;
        margin:0 auto;
        margin-bottom:6rem;
        font-size:3rem;
        color:white;
        line-height:4rem;
            span{
                 font-weight:bold;
            }

            @media(min-width: 900px){
                width:50%;
            }
            @media(min-width: 1024px){
                width:40%;
            }
    }
`;

const HeroImage = styled.img`
    width:25rem;
    height:250px;
    border-radius:50%;


        @media(min-width: 900px){
            width:35rem;
            height:350px;
            border-radius:50%;
        }
`;

const Hero = () => {
    return (
        <HeroContainer id='hero-banner'>
                <div className='top'>
                    <HeroImage src='/images/headshot.PNG' alt='headshot'/>
                </div>
                <div className='bottom'>
                    <p>Hello there, my name is <span className='name' style={{color:'#00A997'}}>Logan Negley</span>. I am a <span className='title' style= {{textDecoration:'underline'}}>{"<Full Stack Web Developer>"}</span></p>
                </div>
        </HeroContainer>
    )
}

export default Hero
