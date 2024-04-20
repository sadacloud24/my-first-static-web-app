import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await (await fetch(`/api/message`)).json();
      setData(response);
    })();
  });

  return <div>
    <div>{data?.title}</div>
    {data?.items?.map(
      (p) => {
        <>
        <div>{p?.name}</div>
        <div>{p?.createdDate}</div>
        <div>{p?.country}</div>
        <div>{p?.message}</div>
      </>
      })}

    {data}
  </div>;
}

export default App;
