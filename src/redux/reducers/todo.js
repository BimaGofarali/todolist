import {
  GET_TODO_BEGIN,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,
  DELETE_TODO_BEGIN,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL
} from "../action/type";

const initialState = {
  listTodo: {
    todo: [],
    loading: false,
    error: null,
  },
};

const reducerTodo = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_TODO_BEGIN:
      return {
        ...state,
        listTodo: {
          loading: true,
          error: null,
        },
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        listTodo: {
          todo: payload,
          loading: false,
        },
      };
    case GET_TODO_FAIL:
      return {
        listTodo: {
          todo: [],
          loading: false,
          error: error,
        },
      };
      case DELETE_TODO_BEGIN :
            return {
                ...state,
                loading : true,
            };
        case DELETE_TODO_SUCCESS :
            return {
                ...state,
                loading : false,
                error : null,
            };
        case DELETE_TODO_FAIL :
            return {
                ...state,
                loading : false,
                error : error,
            }
  }
};

export default reducerTodo;
