import styled from "styled-components";

const Button = styled.button`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  font-weight: 700;
  font-size: 1rem;
  color: #f0b7a4;

  ${props => (props.type === "primary" ? `background: #305f72` : null)}
  ${props => (props.type === "secondary" ? `background: #f0b7a4` : null)}
`;

export default Button;
