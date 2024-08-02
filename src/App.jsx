import React, { useEffect } from 'react';

const App = () => {
  const setCookie = async () => {
    await fetch('http://localhost:8081/set-cookie', {
      method: 'GET',
      credentials: 'include' // Include credentials (cookies)
    });
  };

  const getCookie = async () => {
    const response = await fetch('http://localhost:8081/get-cookie', {
      method: 'GET',
      credentials: 'include' // Include credentials (cookies)
    });
    const text = await response.text();
    console.log(text);
  };

  useEffect(() => {
    const manageCookies = async () => {
      await setCookie();
      await getCookie();
    };
    manageCookies();
  }, []);

  return (
    <div>
      <h1>Cookie Example</h1>
    </div>
  );
};

export default App;
