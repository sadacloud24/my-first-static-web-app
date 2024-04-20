import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      debugger;
      const response = await (await fetch(`/api/message`)).json();
      debugger;
      setData(response);
    })();
  });

  return <div>
    <div>{data?.title}</div>
    {data?.items?.map(
      (p) => <>
        <div>{p?.name}</div>
        <div>{p?.createdDate}</div>
        <div>{p?.country}</div>
        <div>{p?.message}</div>
      </>
    )}
  </div>;
}

export default App;
