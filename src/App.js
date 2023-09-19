import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <h1>Brand Name</h1>
        <button onClick={fetchUsers} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get Users'}
        </button>
      </header>
      <div className="user-card-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
