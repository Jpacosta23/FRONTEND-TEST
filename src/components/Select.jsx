import { Button, Form, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import { getInformation } from "./../services";
import Table from "./Table";

const SelectOption = () => {
  const [name, setName] = useState();
  const [param, setParam] = useState("countries");
  const [info, setInfo] = useState({});
  const infoEl = React.useRef(null);

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setName(value);
    console.log(name);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const information = await getInformation(param, name);
      setInfo(information);
      console.log(info);
    } catch (error) {
      console.error(error);
    }
  };

  const handleParam = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setParam(value);
  };
  console.log(param);

  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <div className="d-flex flex-column justify-content-center col-2 mt-5">
          <label className="mb-1">What are you looking for...</label>
          <select name="select" className="mb-3" onChange={handleParam}>
            <option value="countries" selected>
              countries
            </option>
            <option value="states">states</option>
            <option value="cities">cities</option>
          </select>

          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={handleChange}
              ref={infoEl}
            />
            <Button variant="outline-secondary" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-10">
          <Table param={param} info={info} />
        </div>
      </div>
    </>
  );
};

export default SelectOption;
