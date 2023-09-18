import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, addJobs } from "../redux/action";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const jobsAdded = useSelector((state) => state.favorites.content);
  const jobFiltered = jobsAdded.filter((job) => job.company_name === data.company_name);
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>
          {data.company_name}{" "}
          <i className={`bi bi-heart-fill ms-2 ${jobFiltered.length >= 1 ? "d-inline" : "d-none"}`}></i>
        </Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Button className="text-light ms-2" variant="info" onClick={() => dispatch(addJobs(data))}>
          segna
        </Button>
        <Button className="text-light ms-2" variant="success" onClick={() => dispatch(addFavorites(data))}>
          preferito
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
