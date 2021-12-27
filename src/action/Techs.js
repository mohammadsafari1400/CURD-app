import { GET_TECHS } from "./Types";
// getTechs
export const getTechs = () => async (dispatch) => {
  const res = await fetch(`http://localhost:5000/techs`);
  const data = await res.json();
  dispatch({ type: GET_TECHS, payload: data });
};
// createTechsHandler
export const createTechsHandler = (values) => async () => {
  const date = { ...values };
  const res = await fetch(`http://localhost:5000/techs`, {
    method: "POST",
    body: JSON.stringify(date),
    headers: { "Content-Type": "application/json" },
  });
  return res;
};
