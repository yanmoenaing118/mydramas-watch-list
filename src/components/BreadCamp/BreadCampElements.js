import styled from "styled-components";
import { Link } from "react-router-dom";
export const BreadCampContainer = styled.div`
  width: 100%;

  background: var(--primary-color);
  padding: 1.2rem 0;
`;
export const BreadCampWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1110px;
  margin: 0 auto;
  width: 100%;
`;

export const BreadCampItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BreadCampItem = styled.li`
  margin-right: ${({ pos }) => (pos === "left" ? "auto" : "")};
`;

export const BreadCampLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  font-size: 18px;
  color: var(--white);
  padding: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
