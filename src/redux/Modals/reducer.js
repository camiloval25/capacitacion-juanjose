import { TOGGLE_LOADING } from "./action";

const initialState = {
  loading: false,
  error: false,
  errorMessage: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };

    default:
      return state;
  }
};
