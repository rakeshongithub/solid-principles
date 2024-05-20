import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher(WrappedComponent, url) {
  return function DataFetchingComponent(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(url);
        setData(response.data);
      }

      fetchData();
    }, [url]);

    if (!data) return null;

    return <WrappedComponent data={data} {...props} />;
  };
}

export default DataFetcher;