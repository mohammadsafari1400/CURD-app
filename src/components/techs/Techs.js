import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechs } from "../../action/Techs";

const Techs = () => {
  const { techs } = useSelector((state) => state.tech);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTechs());
    // eslint-disable-next-line
  }, []);
  return (
    <ul className="list-group container mt-5">
      {techs.map((tech) => (
        <li className="list-group-item" key={tech.id}>
          <h5>
            <span>{tech.firstName}</span> <span>{tech.lastName}</span>
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default Techs;
