/* eslint-disable linebreak-style */
/* selectors */
export const getUserInfo = ({ users }) => users;

/* action name creator */
const reducerName = "users";
const createActionName = (name) => `app/${reducerName}/${name}`;
/* action types */
const LOG_IN = createActionName("LOG_IN");
const LOG_OUT = createActionName("LOG_OUT");
/* action creators */
export const logIn = (payload) => ({ payload, type: LOG_IN });
export const logOut = (payload) => ({ payload, type: LOG_OUT });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        login: "John",
        isLogged: true,
        admin: action.payload,
      };
    }
    case LOG_OUT: {
      return {
        isLogged: false,
        admin: false,
      };
    }
    default:
      return statePart;
  }
};
