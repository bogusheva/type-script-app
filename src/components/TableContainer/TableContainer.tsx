import useFetch from "react-fetch-hook";
import Table from "./Table";
import { Candidate } from "../types";
import "./tableContainer.css";

export default function TableContainer() {
  const { isLoading, error, data } = useFetch<Candidate[]>(
    "http://localhost:3000/candidates"
  );
  if (error) {
    console.log(error);
  }

  return (
    <div className="tableContainer">
      <h2>Frontend candidates List</h2>
      <div className="table-list">
        {isLoading ? (
          <div className="loading-block">Loading...</div>
        ) : (
          // @ts-ignore
          <Table data={data} />
        )}
      </div>
    </div>
  );
}
