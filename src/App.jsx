import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AddScholarship from './pages/AddScholarship';
import ViewScholarship from './pages/ViewScholarship';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add" element={ <PrivateRoute>
              <AddScholarship />
            </PrivateRoute>} />
        <Route path="/view" element={<PrivateRoute><ViewScholarship /></PrivateRoute>} />
        
      </Routes>
    </Router>
  );
}

export default App;
