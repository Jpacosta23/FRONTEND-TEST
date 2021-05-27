import { Table } from "react-bootstrap";

const DisplayTable = ({ param, info }) => {
  return (
    <Table striped bordered hover>
      {info.length ? (
        <thead>
          <tr>
            <th>#</th>
            <th
              hidden={param === "states" || param === "cities" ? true : false}
            >
              Country
            </th>
            <th hidden={param === "cities" ? true : false}>State</th>
            <th>City</th>
            <th>Population</th>
          </tr>
        </thead>
      ) : null}
      {info.length
        ? info.map((data, idx) => {
            return (
              <tbody>
                <tr>
                  <td>{idx}</td>
                  <td
                    hidden={
                      param === "states" || param === "cities" ? true : false
                    }
                  >
                    {data.NAME}
                  </td>
                  <td hidden={param === "cities" ? true : false}>
                    {data.NAME_STATE}
                  </td>
                  <td>{data.NAME_CITY}</td>
                  <td>{data.POPULATION}</td>
                </tr>
              </tbody>
            );
          })
        : null}
    </Table>
  );
};

export default DisplayTable;
