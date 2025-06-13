import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    passwordHash: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = 
        await fetch('https://scholarshipadminapi20250603120201.azurewebsites.net/api/Auth/login', {
          //await fetch('http://localhost:5249/api/Auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify({ username: formData.username }));
          navigate('/dashboard');
        } else if (response.status === 401) {
          const data = await response.json();
          alert('Invalid username and password');
          console.error('error');
        } else {
          //setError('An unexpected error occurred.');
          //console.error('An unexpected error occurred.');
          alert('An unexpected error occurred.');
        }
      } catch (error) {
        console.error('Error:', error);
        //setError('Server Error. Please try again later.');
      }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      width: '100%',
    }}>
      <form onSubmit={handleLogin} style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#1976d2' }}>Admin Login</h2>
    
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
    
        <input
          type="password"
          name="PasswordHash"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
    
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </form>
    </div>
    
  );
}
