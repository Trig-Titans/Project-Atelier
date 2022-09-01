import styled, {css} from 'styled-components';

export const Button = styled.button`
  background-color: #a8bdff;
  border-radius: 3px;
  border: 2px solid #222325;
  color: #040c27;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

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
  width: 65%;
`;

export const BreakdownContainer = styled.div`
  text-align: left;
  margin-left: 10%;
  float: left;
  width: 25%;
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