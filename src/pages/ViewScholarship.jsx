import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewScholarship() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://scholarshipadminapi20250603120201.azurewebsites.net/api/Scholarship/all")
      .then(res => setData(res.data))
      .catch(() => alert("Failed to fetch records"));
  }, []);

  return (
    <div>
      <h2>All Scholarships</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Education</th><th>Category</th><th>Title</th><th>Criteria</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s, i) => (
            <tr key={i}>
              <td>{s.education}</td>
              <td>{s.category}</td>
              <td>{s.title}</td>
              <td>{s.criteria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
