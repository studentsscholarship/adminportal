import React from 'react';
import AddScholarship from './AddScholarship';
import ViewScholarship from './ViewScholarship';

export default function Dashboard() {
  return (
    <>
    <div>
      {/* NavBar */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#1976d2',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000
      }}>
        <h2 style={{ margin: 0 }}>Scholarship Admin</h2>
        <button
          onClick={() => {
            localStorage.removeItem('user');
            window.location.href = '/';
          }}
          style={{
            backgroundColor: 'white',
            color: '#1976d2',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginRight: '30px'
          }}
        >
          Logout
        </button>
      </div>

      {/* Main content with top padding due to fixed navbar */}
      <div style={{ paddingTop: '80px', padding: '20px',  }}>
      <div style={{
    maxWidth: '800px',
    margin: '0 auto'
  }}>
        <AddScholarship />
        <hr />
        <ViewScholarship />
      </div>
      </div>
    </div>
    </>
  );
}
