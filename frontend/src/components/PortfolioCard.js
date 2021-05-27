import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`

    .card-wrapper{
        background-color:#03668D;
        height:50vh;
        margin-bottom:3rem;
        .content{
            width:90%;
            margin:0 auto;

        }
        img{
            margin-top:1.5rem;
            width:100%;
            height:200px;
        }
        p{
            font-size:1.5rem;
            color:white;
        }
        .card-btn{
            display:flex;
            flex-flow:row no-wrap;
            justify-content:space-between;
            width:75%;
            margin:0 auto;
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

        }
        
    }
`;

const PortfolioCard = () => {
    return (
        <CardContainer className='card-container'>
            <div className='card-wrapper'>
                <div className='content'>
                    <img src='/images/headshot.png'/>
                    <p>This will be my description</p>
                    <div className='card-btn'>
                        <button>Code</button>
                        <button>Visit</button>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default PortfolioCard
