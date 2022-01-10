import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import Header from "../Component/Header";
import "./Main.css";
import logo1 from "./CRUD.png";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/action/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const plus = <FontAwesomeIcon icon={faPlus} />;
const trash = <FontAwesomeIcon icon={faTrashAlt} />;

function Main() {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.reducerTodo.listTodo);

  useEffect(() => {
    dispatch(getTodo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Header */}
      <div>
        <div>
          <Header />
        </div>
        <Container>
          <div className="todo-header">
            <h1>Activity</h1>
            <button className="btn" data-cy="activity-add-button">
              <span>{plus}</span>Tambah
            </button>
          </div>
          {/* Content */}
          <div>
            {/* {this?.state?.Todo ? 
              <div className="empty-item" data-cy="activity-empty-state">
              <img src={logo1} alt="empty"/>
          </div>
             : 
              Todo?.data?.map((item, index) => {
                return (
                  <div className="d-flex" key={index}>
                    <CardTodo item={item} index={index}/>
                  </div>
                );
              })
            } */}

            {/*Card*/}
            {todoList?.data?.map((item, key) => {
              return (
                <div style={{ paddingRight: "1rem" }} key={item?.id}>
                  <Card
                    id={key}
                    className="activity-card"
                    data-cy="activity-item"
                    style={{ width: "16rem" }}
                  >
                    <Card.Body className="activity-body">
                      <h4 data-cy="activity-item-title">{item?.title}</h4>
                    </Card.Body>
                    <div className="card-footer">
                      <span data-cy="activity-item-date">10 01 2022</span>
                      <span
                        className="item-delete"
                        alt="delete"
                        data-cy="activity-item-delete-button"
                      >
                        {trash}
                      </span>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Main;
