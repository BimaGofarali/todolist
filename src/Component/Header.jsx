import React from "react";
import "./Header.css";
import {Container} from "react-bootstrap";

function Header() {
  return (
      <div className="header">
        <Container>
          <h2>Todo List App</h2>
        </Container>
      </div>
  );
}

export default Header;
