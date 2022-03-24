import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useNavigate  } from 'react-router-dom'

const Banner = () => {

    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate ();
  return (
    <BannerDiv>

        <BannerSearch>
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)} variant='outlined'>{showSearch ? "Hide" : "Search Dates"}</Button>
        </BannerSearch>
        <BannerInfo>
            <h1>Let your curiosity do the booking</h1>
            <h5>
                 Plan a different kind of getaway to uncover the hidden gems near you.
            </h5>
            <Button variant='outlined' onClick={() => navigate('/search')}>Explore Nearby</Button>
        </BannerInfo>
    </BannerDiv>
  )
}

export default Banner


const BannerDiv = styled.div`
    background: url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg")  center center;
    height: 50vh;
    position: relative;
`;

const BannerSearch = styled.div`
    display: flex;
    flex-direction: column;

    button{
        background-color: white !important;
        font-weight: 900 !important;
        text-transform: inherit !important;
        color: #ff7779 !important;
    }

`;

const BannerInfo = styled.div`
    background-color: black;
    color: white;
    padding: 10vh 50px 27px 50px;
    width: 300px;

    button {
        background-color: #ff7779;
        color: white;
        text-transform: inherit;
        margin-top: 20px;
        font-weight: 600;
    }

    button:hover {
        background-color: white;
        color: #ff7779;
    }

    h5 {
        margin-top: 10px;
    }

`;