import React from 'react'
import styled from 'styled-components';


const Section = styled.section`
    width:90%;
    margin:0 auto;
    margin-top:7rem;
    color:white;
    font-weight:0;
    text-align:center;

    p{
        font-size:2rem;
    }
    .heading{
        font-size:4rem;
    }
    .about-circle{
        border-radius:50%;
        width:20rem;
        height:20rem;
        background-color:#03668D;
        position:relative;
        left:-10rem;
        top:20rem;
        z-index:-1;
    }
        .about-rectangle{
        width:13rem;
        height:30rem;
        opacity:.75;
        background-color:#00A997;
        position:relative;
        left:30rem;
        bottom:55rem;
        z-index:-1;
    }
`;

const Bio = () => {
    return (
        <Section>

            {/* <div className='about-circle'></div> */}
            <p className='heading'>Who am I?</p>
            <p>2+ years ago, I fell in love with code and started teaching myself through youtube, books, and pretty much anyway I could think of. Then I decided to invest in myself and enrolled in Lambda School. Fast forward 14 months...</p>
            <p className='heading'>Where am I now?</p>
            <p>Now, I am a Full Stack Web Developer with a passion for Front End Development. I aim to create a rememberable experience using HTML, CSS, Javascript, React, and Node.Js. Being goal-oriented and a driven individual, I am always looking for new things to learn and grow as a developer. I have a drive for creative problem solving and getting the job done.</p>
            <p className='heading'>A few facts</p>
            <p>A few of my hobbies are: photography, sports, and learning new skills.<br/>
            I like to travel and see new things.<br/>
            I can be somewhat of a clean freak sometimes!
            </p>
            {/* <div className='about-rectangle'></div> */}

        </Section>
    )
}

export default Bio
