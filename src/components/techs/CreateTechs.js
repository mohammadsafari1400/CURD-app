import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createTechsHandler } from "../../action/Techs";
import Card from "../UI/Card";

const CreateTechs = () => {
  const [values, setvalues] = useState({ firstName: "", lastName: "" });
  const dispatch = useDispatch();
  const history = useHistory();
  // submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    if (values.firstName.trim() !== "" && values.lastName.trim() !== "") {
      const res = await dispatch(createTechsHandler(values));
      if (res.status === 201) {
        history.push("./techs");
      }
    }
    // setvalues({ ...values, firstName: "", lastName: "" });
  };
  //   onChangeHandler
  const onChangeHandler = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-5">
      <Card>
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="firstName"
              value={values.firstName}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="lastName"
              value={values.lastName}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default CreateTechs;
