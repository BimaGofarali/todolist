import React, { useEffect } from "react";
import { Container} from "react-bootstrap";
import Header from "../Component/Header";
import "./Main.css";
import logo1 from "./CRUD.png";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, addPostTodo } from "../redux/action/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, } from "@fortawesome/free-solid-svg-icons";
import CardTodo from "../Component/CardTodo"

const plus = <FontAwesomeIcon icon={faPlus} />;

function Main() {
  const dispatch = useDispatch();
  const { todo} = useSelector((state) => state.reducerTodo.listTodo);
  const addTodo = (data) => dispatch(addPostTodo(data));

  const handleAddTodo = () => {
    addTodo({ title: "New Activity" });
  };
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
            <button className="btn" data-cy="activity-add-button"  onClick={handleAddTodo}>
              <span>{plus}</span>Tambah
            </button>
          </div>
          {/* Content */}
          <div className="d-flex flex-wrap justify-content-evenl">
            {this?.state?.todo ? 
              <div className="empty-item" data-cy="activity-empty-state">
              <img src={logo1} alt="empty"/>
          </div>
             : 
             todo?.data?.map((item, index) => {
                return (
                  <div key={index}>
                    <CardTodo item={item} index={index}/>
                  </div>
                );
              })
            }
          </div>
        </Container>
      </div>
    </>
  );
}

export default Main;
