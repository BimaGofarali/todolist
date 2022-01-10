import React, {useState} from "react";
import { Card } from "react-bootstrap";
import "./CardTodo.css";
import "dayjs/locale/es";
import dayjs from "dayjs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const trash = <FontAwesomeIcon icon={faTrashAlt} />;

function CardTodo({ ...props }) {
  const [toDoList, setToDoList] = useState([])
  const { item, index } = props;

  const deleteActivity = (item, id) => {
    const newToDo = toDoList.filter(item => item.id !== id);
    setToDoList(newToDo);
  };


 
  return (
    <div style={{ marginRight: "1.2rem" }} key={index}>
      <a href={`/detail/${item.id}`}>
      <Card
        key={index}
        className="activity-card"
        data-cy="activity-item"
        style={{ width: "16rem" }}
      >
        <Card.Body className="activity-body">
          <h4 data-cy="activity-item-title">{item.title}</h4>
        </Card.Body>
        <div className="card-footer">
          <span data-cy="activity-item-date">
            {dayjs(item?.created_at).locale("id").format("DD MMMM YYYY")}
          </span>
          <span
            className="item-delete"
            alt="delete"
            data-cy="activity-item-delete-button"
            onClick={deleteActivity}
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
