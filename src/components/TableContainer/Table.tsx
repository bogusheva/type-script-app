import { Candidate } from "../types";

interface TableProps {
  data: Candidate[];
}

export default function Table({ data }: TableProps) {
  return (
    <table className="table">
      <tr className="table-heading">
        <th>ID</th>
        <th>Date</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>LinkedIn</th>
        <th>Position</th>
        <th>JS skill</th>
        <th>Framework</th>
        <th>Experience</th>
        <th>Education</th>
        <th>English</th>
        <th>Notes</th>
      </tr>
      {data.map((item) => {
        return (
          <tr key={item.id} className="table-row">
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.linkedIn}</td>
            <td>{item.position}</td>
            <td>{item.JSSkill}</td>
            <td>{item.framework}</td>
            <td>{item.experience}</td>
            <td>{item.education}</td>
            <td>{item.english}</td>
            <td>{item.notes}</td>
          </tr>
        );
      })}
    </table>
  );
}
