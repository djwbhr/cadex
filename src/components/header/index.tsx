import { useNavigate } from "react-router";
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
const PressableTitle = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 0;
`;

export const Header = () => {
  const nav = useNavigate();
  return (
    <header className="header">
      <PressableTitle onClick={() => nav("/")}>
        <h1>Some Company</h1>
      </PressableTitle>
      <Button onClick={() => nav("/contact")}>Contact us</Button>
    </header>
  );
};
