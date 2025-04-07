import "./index.css";
import styled from "styled-components";
const Button = styled.button`
  background-color: #121212;
  padding-inline: 50px;
  border-radius: 8px;
  padding-block: 8px;
  border-width: 0;
  color: #ffffff;
  &:active {
    background-color: #464543;
  }
`;

export const Header = () => {
  return (
    <header className="header">
      <h1>Some Company</h1>
      <Button>Contact us</Button>
    </header>
  );
};
