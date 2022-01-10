import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Header from "../Component/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleLeft,
  faEdit,
  faSortAmountUp,
  faSortAmountDown,
  faSortAlphaUp,
  faSortAlphaDown,
  faSort
} from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";
import iconshort from "./updown.png";
import logo2 from './Detail.png';


const plus = <FontAwesomeIcon icon={faPlus} />;
const Left = <FontAwesomeIcon className="fa-lg" icon={faAngleLeft} />;
const Edit = <FontAwesomeIcon className="fa-lg" icon={faEdit} />;
const ShortAmountup = <FontAwesomeIcon icon={faSortAmountUp} />;
const ShortAmountdown = <FontAwesomeIcon icon={faSortAmountDown} />;
const ShortAlphaup = <FontAwesomeIcon icon={faSortAlphaUp} />;
const ShortAlphadown = <FontAwesomeIcon icon={faSortAlphaDown} />;
const Short = <FontAwesomeIcon icon={faSort} />;







function Todo() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Container>
        <div className="todo-header">
          <div className="todo-title">
            <div className="icon-back" data-cy="todo-back-button">
              {Left}
            </div>
            <h1 id="TitileDetail" data-cy="todo-titile">
              New Activity
            </h1>
            <div className="icon-edit-h" data-cy="todo-title-eidt-button">
              {Edit}
            </div>
          </div>

          <div className="d-flex">
            <div>
              <Nav>
                <NavDropdown
                data-cy="todo-sort-button"
                  className="avatar-drop"
                  title={
                    <div className="text-center avatar">
                      <img src={iconshort} alt="short" />
                    </div>
                  }
                >
                  <NavDropdown.Item data-cy="sort-selection"><span>{ShortAmountup}</span>Terbaru</NavDropdown.Item>
                  <NavDropdown.Item data-cy="sort-selection"><span>{ShortAmountdown}</span>Terlama</NavDropdown.Item>
                  <NavDropdown.Item data-cy="sort-selection"><span>{ShortAlphaup}</span>A-Z</NavDropdown.Item>
                  <NavDropdown.Item data-cy="sort-selection"><span>{ShortAlphadown}</span>Z-A</NavDropdown.Item>
                  <NavDropdown.Item data-cy="sort-selection"><span>{Short}</span>Belum Selesai</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </div>
            <button className="btn" data-cy="todo-add-button">
              <span>{plus}</span>Tambah
            </button>
          </div>
        </div>

         {/* Content */}
         <div className="detail-content">
              <div className="empty-item" data-cy="todo-empty-state">
                  <img src={logo2} alt="empty"/>
              </div>
          </div>
      </Container>
    </>
  );
}

export default Todo;
