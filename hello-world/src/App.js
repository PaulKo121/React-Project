import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [auth,setAuth] = useState(null);
  const [contentType,setContentType] = useState(null);
  const [traceId,setTraceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // 在這裡加入授權標頭，post專用
      },
      body: JSON.stringify({ key: 'value' }), // 您可以在這裡放置需要發送的資料
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setAuth(data.headers['Authorization']);
        setContentType(data.headers['Content-Type']);
        setTraceId(data.headers['X-Amzn-Trace-Id']);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Response from httpbin.org/post</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Authorization</h1>
      <p>{auth}</p>
      <h1>Content-Type</h1>
      <p>{contentType}</p>
      <h1>X-Amzn-Trace-Id</h1>
      <p>{traceId}</p>
    </div>
  );
}

export default App;