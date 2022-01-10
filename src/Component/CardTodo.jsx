import React from "react";
import { Card } from "react-bootstrap";
import "./CardTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const trash = <FontAwesomeIcon icon={faTrashAlt} />;

function CardTodo({props }) {
  const { data, index } = props;
  return (
    <div style={{ paddingRight: "1rem" }}>
      <a href={`/detail/${data.id}`} key={index}>
        <Card
        key={index}
          className="activity-card"
          data-cy="activity-item"
          style={{ width: "16rem" }}
        >
          <Card.Body className="activity-body">
            <h4 data-cy="activity-item-title">{data.title}</h4>
          </Card.Body>
          <div className="card-footer">
          <span data-cy="activity-item-date">{data.limit}</span>
            <span
              className="item-delete"
              alt="delete"
              data-cy="activity-item-delete-button"
            >
              {trash}
            </span>
          </div>
        </Card>
      </a>
    </div>
  );
}

export default CardTodo;
