import { useEffect, useState } from 'react';
import UsersList from './components/usersList';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
  }, [])

  const handleOnChange = e => {
    const searchWord = e.target.value;
    
    if (searchWord !== '') {
      const results = users.filter((user) => {
        return user.name.toLowerCase().startsWith(searchWord.toLowerCase());
      });
      setUsers(results);
    } else {
      setUsers(users);
    }
    setSearchTerm(searchWord);
  }
  
  return (
    <div className="App">
      <section className="users-list-wrapper">
        <form className="search-form">
          <input value={searchTerm} type="text" placeholder="Type a name to search..." onChange={handleOnChange} />
        </form>

        <UsersList users={users} />
      </section>
    </div>
  );
}

export default App;
