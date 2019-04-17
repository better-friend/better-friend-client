import styled from "styled-components";

const Button = styled.button`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: #f0b7a4;

  ${props => (props.type === "primary" ? `background: #305f72` : null)}
  ${props => (props.type === "success" ? `background: #4caf50` : null)}
  ${props => (props.type === "danger" ? `background: #f44336` : null)}
  ${props => (props.type === "warning" ? `background: #fdd835` : null)}
`;

export default Button;
