import React, {useState} from 'react';
import styled from 'styled-components';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const navigate = useNavigate();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

    const handleSelect = ((range) => {
        setStartDate(range.selection.startDate);
        setEndDate(range.selection.endDate)
    })

  return (
    <SearchDiv>
         <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
        <h2>
            Number of guests <PeopleIcon />
        </h2>
            <input className='input' min={0} defaultValue={2} type="number" />
            <Button className='button' onClick={() => navigate('/search')}>Search Airbnb</Button>
    </SearchDiv>
  )
}

export default Search;

const SearchDiv = styled.div`
    position: absolute;
    top: 35px;
    left: 25%;

    h2{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 559px;
        padding: 10px;
        background-color: white;
        position: absolute;
        left: 0;
        top: 320px;
    }

    .input {
        width: 539px;
        padding: 20px;
        position: absolute;
        left: 0;
        height: 30px;
        top: 360px;
        border: none;
    }

    .input:focus {
        outline-width: 0;
    }
    .button {
        position: absolute;
        left: 0;
        top: 420px;
        text-transform: inherit !important;
        background-color: #ff7779;
        color: white;
        width: 579px;
    }
    .button:hover {
        background-color: white;
        color: #ff7779;
    }
`;