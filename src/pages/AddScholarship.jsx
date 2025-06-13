import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ViewScholarship from './ViewScholarship';

export default function AddScholarship() {
  const [formData, setFormData] = useState({
    education: '',
    category: '',
    title: '',
    criteria: ''
  });
  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://scholarshipadminapi20250603120201.azurewebsites.net/api/Scholarship/add", formData);
      //await axios.post("http://localhost:5173/api/Scholarship/add", formData);
      alert("Scholarship added successfully");
      setFormData({ education: '', category: '', title: '', criteria: '' });
    } catch (error) {
      alert("Error adding scholarship");
    }
  };

  return (
    <div style={{ backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
   

    {/* Form Container */}
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
      <form onSubmit={handleSubmit} style={{
        width: '100%',
        maxWidth: '600px',
        padding: '30px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: '#ffffff'
      }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Add Scholarship</h2>

        <input
          placeholder="Education"
          value={formData.education}
          onChange={(e) => setFormData({ ...formData, education: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Criteria"
          value={formData.criteria}
          onChange={(e) => setFormData({ ...formData, criteria: e.target.value })}
          style={inputStyle}
        />

        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          marginTop: '16px',
          backgroundColor: '#1565c0',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      </form>
    </div>

    {/* Scholarship List Section */}
    {/* <div style={{ padding: '40px' }}>
      <h2 style={{ color: '#333' }}>All Scholarships</h2>
      <ViewScholarship />
    </div> */}
  </div>
  );
}
