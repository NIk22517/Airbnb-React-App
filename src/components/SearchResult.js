import React from 'react';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import styled from 'styled-components';

const SearchResult = ({img, location, title, description, star, price, total}) => {
  return (
    <SearchResultDiv>
    <img src={img} alt="" />
    <FavoriteBorderIcon className="searchResult__heart" />

    <SearchResultInfo>
        <SearchResultInfoTop>
            <p>{location}</p>
            <h3>{title}</h3>
            <p>____</p>
            <p>{description}</p>
        </SearchResultInfoTop>

        <SearchResultInfoBottom>
            <div className="searchResult__stars">
                <StarIcon className="searchResult__star" />
                <p>
                    <strong>{star}</strong>
                </p>
            </div>
            <div className='searchResults__price'>
                <h2>{price}</h2>
                <p>{total}</p>
            </div>
        </SearchResultInfoBottom>
    </SearchResultInfo>
</SearchResultDiv>
  )
}

export default SearchResult;

const SearchResultDiv = styled.div`
    display: flex;
    position: relative;
    margin: 20px;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    cursor: pointer;
  }


   &:hover {
    opacity: 0.8;
}

  img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
}



.searchResult__heart {
    position: absolute;
    top: 20px;
    right: 40px;
}

@media (max-width: 600px) {
    .searchResult__heart{
        top: 50px;
        right: 20px;
    }
}

  
.searchResult__infoBottom {
    display: flex;
    justify-content: space-between;
}


.searchResult__star {
    color: red;
}


.searchResult__stars {
    display: flex;
    align-items: center;
}

.searchResults__price > p {
    text-align: right;
  }

.searchResults__price {
    position: absolute;
    bottom: 20px;
    right: 30px;
}

`;

const SearchResultInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
`;

const SearchResultInfoTop = styled.div`
    width: 40vw;

 h3 {
    font-weight: 300;
    margin-top: 10px;
}

p {
    margin-top: 10px;
    font-size: 13px;
    color: gray;
  }
`;

const SearchResultInfoBottom = styled.div`
    display: flex;
    justify-content: space-between;


.searchResult__star {
    color: red;
}


.searchResult__stars {
    display: flex;
    align-items: center;
}

 p {
    text-align: right;
  }

.searchResults__price {
    position: absolute;
    bottom: 20px;
    right: 30px;
}

@media (max-width: 600px) {
    .searchResults__price{
    position: absolute;
    font-size: 10px;
    bottom: 10px;
    right: 30px;
    color: red;
    }
}
`