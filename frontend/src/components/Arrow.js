import React from 'react'
import styled from 'styled-components';

const UpArrow = styled.div`
    background-color:black;
    display:inline;
    font-size:2.5rem;
    padding:.5rem 1rem;
    color:white;
    border-radius:50%;
    position: sticky;
    bottom:0;
    float:right;
    margin: 0px .5rem .5rem 0px;

    a{
        color:#00A997;
    }
`;

const Arrow = () => {
    return (
        <UpArrow>
            <a href='#top'><i class="fas fa-arrow-up"></i></a>
        </UpArrow>
    )
}

export default Arrow
