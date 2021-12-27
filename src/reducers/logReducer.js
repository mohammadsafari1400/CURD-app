import { DELETE_LOGS, GET_LOGS } from "../action/Types";
const init = {
  logs: [],
};
const logReducer = (state = init, action) => {
  switch (action.type) {
    case GET_LOGS:
      return { ...state, logs: action.payload };
    case DELETE_LOGS:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };

    default:
      return state;
  }
};

export default logReducer;
