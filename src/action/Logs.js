import { GET_LOGS, DELETE_LOGS } from "./Types";
// getLogs
export const getLogs = () => async (dispatch) => {
  const res = await fetch(`http://localhost:5000/logs`);
  const data = await res.json();
  dispatch({ type: GET_LOGS, payload: data });
};
// createLogHandler
export const createLogHandler = (values) => async () => {
  const date = { ...values, date: new Date() };
  const res = await fetch(`http://localhost:5000/logs`, {
    method: "POST",
    body: JSON.stringify(date),
    headers: { "Content-Type": "application/json" },
  });
  return res;
};
// deleteLog
export const deleteLog = (id) => async (dispatch) => {
  await fetch(`http://localhost:5000/logs/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  dispatch({ type: DELETE_LOGS, payload: id });
};
// updateLog
export const updateLog = (log) => async () => {
  const date = { ...log, date: new Date() };
  const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
    method: "PUT",
    body: JSON.stringify(date),
    headers: { "Content-Type": "application/json" },
  });
  return res;
};
