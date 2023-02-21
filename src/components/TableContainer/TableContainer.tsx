import useFetch from "react-fetch-hook";
import Table from "./Table";
import { Candidate } from "../types";
import "./tableContainer.css";

// {
//   "id": 1,
//   "date": "01.02.2023",
//   "name": "Jane",
//   "surname": "Smith",
//   "email": "jsmith@gmail.com",
//   "phone": "+380984897896",
//   "linkedIn": "https://www.linkedin.com/in/jsmith",
//   "position": "intern",
//   "JSSkill": "true",
//   "framework": "react",
//   "experience": "none",
//   "education": "courses",
//   "english": "B2",
//   "resume": "CV_JSmith_InternFrontEndDeveloper.pdf",
//   "notes": "fast-learner, team-player"
// }

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
          <Table data={data} />
        )}
      </div>
    </div>
  );
}
