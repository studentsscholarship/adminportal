import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewScholarship() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://scholarshipadminapi20250603120201.azurewebsites.net/api/Scholarship/all");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching records:", error);
        alert("Failed to fetch records");
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <h2>All Scholarships</h2>
      <table style={{
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
}}>
  <thead>
    <tr style={{
      backgroundColor: '#1976d2',
      color: 'white',
      textAlign: 'left'
    }}>
      <th style={{ padding: '12px' }}>Education</th>
      <th style={{ padding: '12px' }}>Category</th>
      <th style={{ padding: '12px' }}>Title</th>
      <th style={{ padding: '12px' }}>Criteria</th>
    </tr>
  </thead>
  <tbody>
    {data.map((s, i) => (
      <tr key={i} style={{
        backgroundColor: i % 2 === 0 ? '#f9f9f9' : 'white',
        transition: 'background-color 0.3s'
      }}>
        <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{s.education}</td>
        <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{s.category}</td>
        <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{s.title}</td>
        <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{s.criteria}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}
