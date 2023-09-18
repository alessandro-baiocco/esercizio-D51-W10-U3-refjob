import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/action";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.list.content?.data);
  const dispatch = useDispatch();

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobs(query));

    //   try {
    //     const response = await fetch(baseEndpoint + query + "&limit=20");
    //     if (response.ok) {
    //       const { data } = await response.json();
    //       setJobs(data);
    //     } else {
    //       alert("Error fetching results");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
  };
  const jobsNumber = useSelector((state) => state.jobs.content.length);
  const favNumber = useSelector((state) => state.favorites.content.length);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/ListaLavori">
            <Button className="text-light" variant="info">
              vai alla lista ({jobsNumber})
            </Button>
          </Link>
          <Link to="/preferiti">
            <Button className="text-light" variant="success">
              preferiti({favNumber})
            </Button>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs && jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
