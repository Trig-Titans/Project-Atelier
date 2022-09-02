import styled, {css} from 'styled-components';

export const Button = styled.button`
  background-color: #DBDBD6;
  border-radius: 3px;
  border: 2px solid teal;
  color: #006B6B;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  &:hover {
    background-color: #C2B280;
  }

  ${props => props.primary && css`
    border: 2px solid #C4C4BA;
    background: #006B6B;
    color: #DBDBD6;
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
  width: 65%;
  padding-right: 10%;
  height: 60vh;
  background: white;
`;

export const BreakdownContainer = styled.div`
  text-align: left;
  float: left;
  width: 35%;
  padding-left: 10%;
  height: 60vh;
  background: white;
`;

export const RecommendationContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: white;
`;

export const SellersResponse = styled.div`
  background-color: #8eaff158;
  border-radius: 5px;
`;

export const BarForGraph = styled.div`
  background-color: #027a02;
  border: 2px solid black;
  height: 10px;
`;

export const BarGraphContainer = styled.div`
  background-color: #A8A8A8;
  height: 10px;
  width: 100px;
`;

export const ScrollableContainer = styled.div`
  height: 50vh;
  overflow: auto;
`;
// src: props => props.src

// export const Thumbnail = styled.img.attrs({
//   src: "https://i.ytimg.com/vi/qencyFf3lAg/maxresdefault.jpg"
// })`
//   height: 100px;
//   width: 100px;
//   padding: 10px;
// `