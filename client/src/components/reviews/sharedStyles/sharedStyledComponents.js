import styled, {css} from 'styled-components';

export const Button = styled.button`
  background-color: #a8bdff;
  border-radius: 3px;
  border: 2px solid #222325;
  color: #040c27;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  &:hover {
    background-color: #6684e7e6
  }

  ${props => props.primary && css`
    background: #002d71;
    color: white;
  `}
`;

export const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export const ReviewTileContainer = styled.div`
  text-align: left;
  border: 2px solid black;
  margin: 10px;
  padding: 2px;
`;

export const ReviewsContainer = styled.div`
  text-align: left;
  float: left;
  width: 70%;
`;

export const BreakdownContainer = styled.div`
  text-align: left;
  margin-left: 10%;
  float: left;
  width: 20%;
`;

export const RecommendationContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SellersResponse = styled.div`
  background-color: #8eaff158;
  border-radius: 5px;
`;