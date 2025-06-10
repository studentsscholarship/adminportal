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
        const response = await fetch('https://scholarshipadminapi20250603120201.azurewebsites.net/api/Auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify({ username: formData.username }));
          navigate('/add');
        } else if (response.status === 401) {
          const data = await response.json();
          //setError(data.message);
          console.error('error');
        } else {
          //setError('An unexpected error occurred.');
          console.error('An unexpected error occurred.');
        }
      } catch (error) {
        console.error('Error:', error);
        //setError('Server Error. Please try again later.');
      }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input
  type="text"
  name="username"
  placeholder="Username"
  value={formData.username}
  onChange={handleChange}
  required
/>
<input
  type="password"
  name="PasswordHash"
  placeholder="Password"
  value={formData.password}
  onChange={handleChange}
  required
/>
      <button type="submit">Login</button>
    </form>
  );
}
