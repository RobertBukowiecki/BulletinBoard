import Axios from "axios";

import { API_URL } from "../config";

/* selectors */
export const getAll = ({ posts }) => posts.data;
export const getPostById = ({ posts }, id) =>
  posts.data.find((item) => item._id == id);
export const getAllPublished = ({ posts }) =>
  posts.data.filter((item) => item.status == "published");

/* action name creator */
const reducerName = "posts";
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName("FETCH_START");
const FETCH_SUCCESS = createActionName("FETCH_SUCCESS");
const FETCH_ERROR = createActionName("FETCH_ERROR");
const ADD_POST = createActionName("ADD_POST");
const EDIT_POST = createActionName("EDIT_POST");
const FETCH_ONE_POST = createActionName("FETCH_ONE_POST");

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addPost = (payload) => ({ payload, type: ADD_POST });
export const editPost = (payload) => ({ payload, type: EDIT_POST });
export const fetchOnePost = (payload) => ({ payload, type: FETCH_ONE_POST });

/* thunk creators */
export const fetchAll = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const posts = getState();
    if (posts.posts.data.length < 1)
      Axios.get(`${API_URL}/posts`)
        .then((res) => {
          dispatch(fetchSuccess(res.data));
          console.log(res.data);
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
  };
};

export const fetchAddPost = (data) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.post(`${API_URL}/posts`, data)
      .then((res) => {
        dispatch(addPost(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchPost = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    Axios.get(`${API_URL}/posts/${id}`)
      .then((res) => {
        dispatch(fetchOnePost(res.data));
        console.log("fetchOne post", res.data);
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_ONE_POST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case EDIT_POST: {
      return {
        ...statePart,
        data: {
          products: [
            ...statePart.data.map((data) => {
              if (data.id === action.payload.id) {
                return action.payload;
              } else {
                return data;
              }
            }),
          ],
        },
      };
    }
    case ADD_POST: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
