import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "var(--primary-color)" : "var(--white)"};

  color: ${({ primary }) =>
    primary ? "var(--white)" : "var(--primary-color)"};
  box-shadow: ${({ shadow }) =>
    shadow ? `0 3px 5px rgba(0,0,0,0.1)` : "none"};
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background: ${({ primary }) =>
      primary ? "var(--white)" : "var(--primary-color)"};
    color: ${({ primary }) =>
      primary ? "var(--primary-color)" : "var(--white)"};
  }

  & > a {
    display: block;
    padding: 14px 48px;
    text-decoration: none;
    color: inherit;

    @media screen and (max-width: 480px) {
      padding: 8px 28px;
      margin: 0.8px 0;
    }
  }
`;
// 1 54 21
