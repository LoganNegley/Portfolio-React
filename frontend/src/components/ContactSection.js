import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
    width:95%;
    margin:0 auto;
    margin-top:-15rem;

    h3{
        color:#00A997;
        font-size:3rem;
        letter-spacing:.5rem;
    }
    .contact-container{
        background-color:#03668D;
        width:100%;
        margin:0 auto;
        margin-bottom:3rem;
        text-align:center;


        h3{
            font-size:3rem;
            color:white;
            margin-top:2rem;
        }
        .first{
            font-size:2rem;
            font-weight:600;
        }
        p{
            font-size:1.5rem;
            color:white;
        }
        i{
            font-size:3rem;
            color:black;
            margin-left:1.5rem;

        }
    }
`;
const ContactSection = () => {
    return (
        <Section id='contact'>
            <h3 id='contact'>Contact Me</h3>
            <div className='contact-container'>
                <h3>Let's get in touch</h3>
                <p className='first'>I look forward to hearing from you!</p>
                <p>Houston,Texas<br/>
                LoganNegley@gmail.com<br/>
                832-833-2701
                </p>
                <div className='icons'>
                    <a href='https://www.linkedin.com/in/logan-negley/' target='_blank'><i className="fab fa-linkedin"></i></a>
                    <a href='https://github.com/LoganNegley' target='_blank'><i className="fab fa-github"></i></a>
                </div>
            </div>
        </Section>
    )
}

export default ContactSection
