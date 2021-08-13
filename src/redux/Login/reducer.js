import {
  USER_SIGNIN,
  MODIFY_PHONENUMBER,
} from "./action";

const initialState = {
  userLogged: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGNIN:
      return {
        ...state,
        userLogged: payload,
      };

    case MODIFY_PHONENUMBER:
      return {
        ...state,
        userLogged: {
          ...state.userLogged,
          phoneNumber: payload,
        },
      };

    default:
      return state;
  }
};
