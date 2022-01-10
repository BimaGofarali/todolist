import {
  GET_TODO_BEGIN,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,
  POST_TODO_BEGIN,
  POST_TODO_SUCCESS,
  POST_TODO_FAIL,
  DELETE_TODO_BEGIN,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL
} from "./type";
import axios from "axios";

export const getTodo = () => async (dispatch) => {
  dispatch({
    type: GET_TODO_BEGIN,
    loading: true,
    error: null,
  });
  try {
    const res = await axios.get(
      `https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io`
    );
    dispatch({
      type: GET_TODO_SUCCESS,
      loading: false,
      payload: res.data,
      error: null,
    });
  } catch (err) {
    dispatch({
      type: GET_TODO_FAIL,
      error: err.response,
    });
  }
};

export const addPostTodo = (id) => async (dispatch) => {
  dispatch({
    type: POST_TODO_BEGIN,
    loading: true,
    error: null,
  });
  try {
    // eslint-disable-next-line no-unused-vars
    const res = await axios.post(
      `https://todo.api.devcode.gethired.id/activity-groups/${id}`
    );
    dispatch({
      type: POST_TODO_SUCCESS,
      loading: false,
      error: null,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: POST_TODO_FAIL,
      error: err.response,
    });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_TODO_BEGIN,
    loading: true,
    error: null,
  });
  try {
    // eslint-disable-next-line no-unused-vars
    const res = await axios.delete(
      `https://todo.api.devcode.gethired.id/activity-groups/${id}`
    );
    dispatch({
      type: DELETE_TODO_SUCCESS,
      loading: false,
      error: null,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: DELETE_TODO_FAIL,
      error: err.response,
    });
  }
};