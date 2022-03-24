import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterDiv>
    <p>© 2020 Airbnb clone! No rights reserved </p>
    <p>Privacy · Terms · Sitemap · Company Details</p>
   </FooterDiv>
  )
}

export default Footer;

const FooterDiv = styled.div`
    border-top: 1px solid lightgray;
    padding: 20px;
    background-color: #f7f7f7;
    text-align: center;


 p {
    padding: 5px;
    font-size: 14px;
}
`