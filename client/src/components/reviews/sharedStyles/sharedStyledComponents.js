import styled, {css} from 'styled-components';

export const Button = styled.button`
  background-color: #DBDBD6;
  border-radius: 3px;
  border: 2px solid teal;
  color: #006B6B;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  @media (max-width: 600px) {
    max-width: 5rem;
    max-height: 5rem;
    font-size: 10px;
  }
  &:hover {
    background-color: #800000;
    color: #DBDBD6;
  }

  ${props => props.primary && css`
    border: 2px solid #C4C4BA;
    background: #006B6B;
    color: #DBDBD6;
  `}
`;

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: white;
  @media (max-width: 600px) {
    flex-direction: column;
    border-top: 2px solid teal;
  }
`;

export const ReviewTileContainer = styled.div`
  text-align: left;
  border-bottom: 2px solid black;
  margin: 10px;
  padding: 10px 30px;
`;

export const ReviewsContainer = styled.div`
  text-align: left;
  float: left;
  width: 65%;
  padding-right: 10%;
  /* height: 100%; */
  @media (max-width: 600px) {
    margin-top: 2.0rem;
    margin-left: 1.5rem;
    float: none;
    width: 17rem;
  }
`;

export const BreakdownContainer = styled.div`
  text-align: left;
  float: left;
  width: 35%;
  padding-left: 10%;
  height: 100%;
  @media (max-width: 600px) {
    margin-left: 1.2rem;
    float: none;
    width: 17rem;
  }
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
  height: 65vh;
  overflow: auto;
`;

export const StarFilterLink = styled.button`
  color: #006B6B;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  background: transparent;
  border: none;

  &:hover {
    color: black;
  }
`;

export const StyledOverviewStars = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: 'row';
  flex-wrap: none;
  /* grid-area: OvStar; */
  /* margin-top: 10px; */
`;

export const RadioInputContainer = styled.div`
  display: 'flex';
  flex-direction: 'row';
  width: 100%;
`;

export const RadioContainer = styled.div`
  display: 'flex';
  flex-direction: 'column';
  margin-left: 4%;
`;

export const RadioLabel = styled.label`
  margin-left: 2%;
`
export const StyledPhoto = styled.img`
  height: 10vh;
  width: auto;
  margin: 2vh 0;
`;

export const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 2.5vh 0;
`;

// src: props => props.src

// export const Thumbnail = styled.img.attrs({
//   src: "https://i.ytimg.com/vi/qencyFf3lAg/maxresdefault.jpg"
// })`
//   height: 100px;
//   width: 100px;
//   padding: 10px;
// `