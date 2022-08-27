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
  text-align: center;
`;