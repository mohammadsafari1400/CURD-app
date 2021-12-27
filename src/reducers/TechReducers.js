import { GET_TECHS } from "../action/Types";

const init = {
  techs: [],
};
const TechReducers = (state = init, action) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload };

    default:
      return state;
  }
};

export default TechReducers;
