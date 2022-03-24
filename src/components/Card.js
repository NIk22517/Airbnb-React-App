import React from 'react';
import styled from 'styled-components';

const Card = ({src, title, description, price}) => {
  return (
    <CardDiv>
            <img src={src} alt="" />
            <CardInfo>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </CardInfo>
        </CardDiv>
  )
}

export default Card;

const CardDiv = styled.div`

    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
    transition: transform 100ms ease-in;
    cursor: pointer;

    
  
   &:hover {
    transform: scale(1.07);
  }
  
   img {
    object-fit: fill;
    min-width: 300px;
    min-height: 200px;
    width: 100%;
  }
`;

const CardInfo = styled.div`
    margin-top: -9px;
    border-radius: 10px;
    padding: 20px;
    padding-top: 20px;
    border: 1;

   h2 {
    font-size: 18px;
    font-weight: 600;
  }
  
  card__info > h4 {
    font-size: 14px;
    font-weight: 300;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`