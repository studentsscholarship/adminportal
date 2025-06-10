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

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://scholarshipadminapi20250603120201.azurewebsites.net/api/Scholarship/add", formData);
      alert("Scholarship added successfully");
      setFormData({ education: '', category: '', title: '', criteria: '' });
    } catch (error) {
      alert("Error adding scholarship");
    }
  };

  return (
    <div>
      {/* NavBar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#1976d2',
        color: 'white'
      }}>
        <h3>Scholarship Admin</h3>
        <button onClick={handleLogout} style={{
          backgroundColor: 'white',
          color: '#1976d2',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Logout
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px', padding: '20px' }}>
        <h2>Add Scholarship</h2>
        <input placeholder="Education" value={formData.education} onChange={(e) => setFormData({ ...formData, education: e.target.value })} /><br/><br/>
        <input placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} /><br/><br/>
        <input placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} /><br/><br/>
        <input placeholder="Criteria" value={formData.criteria} onChange={(e) => setFormData({ ...formData, criteria: e.target.value })} /><br/><br/>
        <button type="submit">Submit</button>
      </form>

      <br />
      <ViewScholarship />
    </div>
  );
}
