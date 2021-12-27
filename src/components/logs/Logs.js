import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLogs, deleteLog } from "../../action/Logs";
const Logs = () => {
  const { logs } = useSelector((state) => state.log);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLogs());
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="list-group container mt-5">
      {logs.map((log) => (
        <li className="list-group-item d-flex align-items-center" key={log.id}>
          <div className="info">
            <h5>{log.tech}</h5>
            <h5>
              <span className={log.attention ? "text-success" : "text-danger"}>
                {log.message}
              </span>{" "}
              at <strong>{log.date}</strong>
            </h5>
          </div>
          <div className="icon ms-auto">
            <i
              className="bi bi-trash mx-2 "
              onClick={() => dispatch(deleteLog(log.id))}
            ></i>
            <Link to={`edit-log/${log.id}`}>
              <i className="bi bi-pencil-square"></i>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Logs;
