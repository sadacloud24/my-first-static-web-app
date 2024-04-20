import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await (await fetch(`/api/message`)).json();
      setData(response);
    })();
  });

  return <div className='row form-control'>
    <h2>{data?.title}</h2>
    {data?.items?.map(
      (p) => <>
        <div className='col-mod-12'>{p?.name}</div>
        <div className='col-mod-12'>{p?.createdDate}</div>
        <div className='col-mod-12'>{p?.country}</div>
        <div className='col-mod-12'>{p?.message}</div>
      </>
    )}
  </div>;
}

export default App;
