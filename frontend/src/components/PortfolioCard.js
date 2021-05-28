import React from 'react'
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CardContainer = styled.div`

        @media(min-width: 768px){
            width:40%;
        }
            @media(min-width: 1200px){
                width:33%;
            }

    .card-wrapper{
        background-color:#03668D;
        margin-bottom:3rem;

        @media(min-width: 768px){
            margin:1.5rem;
        }



        .content{
            width:90%;
            margin:0 auto;

    .project-details h4{

        @media(min-width: 480px){
            margin-top:-5rem;
        }
        @media(min-width: 600px){
            margin-top:-12rem;
        }
        @media(min-width: 768px){
            margin-top:1rem;
        }
    }

        h4{
            color:white;
            font-size:2rem;
            font-weight:bold;
            letter-spacing:.25rem;
            margin: 1.5rem 0;
        }
        }
        img{
            margin-top:1.5rem;
            width:100%;
            height:275px;

            @media(min-width: 600px){
                width:85%
            }
        }
        p{
            font-size:1.5rem;
            color:white;
            margin:1.75rem 0;
        }
        .card-btn{
            display:flex;
            flex-flow:row no-wrap;
            justify-content:space-between;
            width:75%;
            margin:0 auto;

                @media(min-width: 768px){
                    width:90%;
                }
        }
        button{
            width:45%;
            background-color:#00A997;
            border:none;
            border-radius:5px;
            margin:2rem;
            padding:.5rem;
            color:white;
            letter-spacing:.25rem;
            font-weight:bold;

                @media(min-width: 768px){
                    width:55%;
                    margin-top:.5rem;
                    padding:.75rem;
                }

            a{color:white}

        }
        
    }

`;

const PortfolioCard = (props) => {
    const project = props.project;

    const settings = {
        naturalSlideWidth:100, 
        naturalSlideHeight:100, 
        totalSlides:project.image.length, 
        isPlaying:true,
        interval:2000, 
        infinite:true,
        visibleSlides:1
    }

    return (
        <CardContainer className='card-container'>
            <div className='card-wrapper'>
                <div className='content'>
                    <CarouselProvider {...settings}>
                        <Slider>
                            {project.image.map((item, index) =>(
                            <Slide>
                                <img src={project.image[index]}/>
                            </Slide>
                            ))}
                        </Slider>
                    </CarouselProvider>
                    <div className='project-details'>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        <p style={{fontWeight:'bold'}}>{project.techStack.techDescription}</p>
                        <p style={{fontWeight:'bold'}}>Stack: {project.techStack.stack.map(item =>(
                                `${item}, `
                        ))}
                        </p>
                        </div>
                        <div className='card-btn'>
                            <button><a href={project.git} target='_blank'>Code</a></button>
                            <button><a href={project.site} target='_blank'>Visit</a></button>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default PortfolioCard
