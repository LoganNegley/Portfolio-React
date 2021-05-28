import React from 'react'
import styled from 'styled-components';


// Styles
const HeroContainer= styled.section`
    width:100%;
    margin:0 auto;
    .circles{
        width:100px;
        height:100px;
        margin-top:3rem;
        border-radius:50%;
    }
    .top{
        width:85%;
        margin:0 auto;
        ${'' /* position:relative; */}
        
        ${'' /* @media screen and (min-width: 525px){
            
        } */}

        .hero-circle-one{
            background-color:#00A997;
            position:absolute;
            top:0rem;
            right:-2rem;
            z-index:-1;

            @media screen and (min-width: 435px){
                right:3rem;
            }
        }
        .hero-circle-two{
            background-color:#03668D;
            position:absolute;
            top:9rem;
            right:-2rem;
            z-index:-1;
            border:1rem solid #173154;
            
            @media screen and (min-width: 435px){
                right:3rem;
            }
        }
    }

    .bottom{
        width:95%;
        text-align:center;
        margin:0 auto;
        font-size:3rem;
        color:white;
        line-height:4rem;
        span{
             font-weight:bold;
        }
    }
`;
const HeroImage = styled.img`
    width:25rem;
    height:250px;
    border-radius:50%;
    border:1rem solid #173154;
`;

const Hero = () => {
    return (
        <HeroContainer id='hero-banner'>
                <div className='top'>
                    <HeroImage src='/images/headshot.PNG' alt='headshot'/>
                    {/* <div className='hero-circle-one circles'></div>
                    <div className='hero-circle-two circles'></div> */}
                </div>
                <div className='bottom'>
                    <p>Hello there, my name is <span className='name' style={{color:'#00A997'}}>Logan Negley</span>. I am a <span className='title' style= {{textDecoration:'underline'}}>{"<Full Stack Web Developer>"}</span></p>
                </div>
        </HeroContainer>
    )
}

export default Hero
