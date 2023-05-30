import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HomePage = () => {
  console.log("HomePage: ");
  return (
    <Container>
      <Link className="Link" to="/todo">
        Todo
      </Link>
      <Link className="Link" to="/calculator">
        Calculator
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  .Link {
    text-decoration: none;
  }
  .Link:hover {
    color: red;
  }
`;
