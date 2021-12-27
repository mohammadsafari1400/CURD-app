import Card from "../UI/Card";
import { createLogHandler, updateLog } from "../../action/Logs";
import { getTechs } from "../../action/Techs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const CreateLog = ({ isEdit }) => {
  const { logs } = useSelector((state) => state.log);
  const { techs } = useSelector((state) => state.tech);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [values, setvalues] = useState({
    message: "",
    tech: "",
    attention: false,
  });
  // useEffect
  useEffect(() => {
    dispatch(getTechs());
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (isEdit) {
      const log = logs.find((log) => log.id === Number(id));
      setvalues({ ...log });
    }
    // eslint-disable-next-line
  }, []);
  //   onsubmitHandler
  const onsubmitHandler = async (e) => {
    e.preventDefault();
    if (values.message.trim() !== "" && values.tech.trim() !== "") {
      if (!isEdit) {
        const res = await dispatch(createLogHandler(values));
        if (res.status === 201) {
          history.push("/");
        }
      } else {
        const res = await dispatch(updateLog(values));
        if (res.status === 200) {
          history.push("/");
        }
      }
    }
  };
  //   onChangeHandler
  const onChangeHandler = (e) => {
    if (e.target.name === "attention") {
      setvalues({ ...values, attention: !values.attention });
    } else {
      setvalues({ ...values, [e.target.name]: e.target.value });
    }
  };
  return (
    <div className="container mt-5">
      <Card>
        <form onSubmit={(e) => onsubmitHandler(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="message"
              value={values.message}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Tech
            </label>
            <select
              className="form-select"
              value={values.tech}
              name="tech"
              onChange={(e) => setvalues({ ...values, tech: e.target.value })}
            >
              <option value="" disabled>
                Open this select menu
              </option>
              {techs.map((tech) => (
                <option
                  value={`${tech.firstName} ${tech.lastName}`}
                  key={tech.id}
                >
                  {tech.firstName} {tech.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="attention"
              value={values.attention}
              onChange={(e) => onChangeHandler(e)}
              checked={values.attention}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              attention
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            {isEdit ? <span>Update</span> : <span>Submit</span>}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default CreateLog;
