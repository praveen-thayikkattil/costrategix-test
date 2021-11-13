import { useEffect, useState } from 'react';
import UsersList from './components/UsersList';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
  }

  useEffect(() => {
    let mounted = true;
    getUsers()
      .then(users => {
        if(mounted) {
          setUsers(users)
        }
      })
    return () => mounted = false;
  }, []);
  
  return (
    <div className="App">
      <section className="users-list-wrapper">
        <UsersList users={users} />
      </section>
    </div>
  );
}

export default App;
