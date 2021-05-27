import React from 'react'
import styled from 'styled-components';

//styles
const Section = styled.section`
    background-color:#04808E;
    width:100%;

    .skills-icon-wrapper{
        width:85%;
        margin:0 auto;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
        align-items:center;

        i{
            margin: 1rem 1rem;
            font-size:10rem;
        }
    }
    .icon{
        margin-top:2rem;
        display:inline;
        border:solid black 4px;
        height:50%;
        padding:1rem;
        font-size:4rem;
        font-weight:800;
    }
    #adobe-xd-icon{
        border-radius:10px;
    }
    #adobe-ill-icon{

    }
`;

const Skills = () => {
    return (
        <Section className='skills-container'>
            <div className='skills-icon-wrapper'>
                <i className="fab fa-css3-alt"></i>
                                                <div id='adobe-xd-icon' className='icon'>Xd</div>
                <i className="fab fa-js"></i>

                <i className="fab fa-react"></i>
                <i className="fab fa-github"></i>
                                <div id='adobe-ill-icon' className='icon'>Ai</div>
                <i className="fab fa-node"></i>
                <i className="fab fa-html5"></i>


            </div>
        </Section>
    )
}

export default Skills;
