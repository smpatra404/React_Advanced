import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, [])

  if (isLoading) {
    return <h2>Loading....</h2>
  }
  if (isError) {
    return <h2>Error Occured !!!</h2>
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
