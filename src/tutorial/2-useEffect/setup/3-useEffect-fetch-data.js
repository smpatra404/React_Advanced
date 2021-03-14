import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const users = await fetch(url).then(result => result.json());
    setUsers(users);
  }
  useEffect(() => {
    getUsers();
  }, [])
  return <>
    <h2>Github Users</h2>
    <ul className="users">
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        console.log(user)
        return <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <p>{html_url}</p>
          </div>
        </li>
      })}
    </ul>
  </>;
};

export default UseEffectFetchData;
