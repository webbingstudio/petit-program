import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Requests from "./Requests";
import { Navbar } from './components/Navbar';
import { Program } from './components/Program';

export const App = () => {

  const instance = axios.create({
    baseURL: process.env.REACT_APP_NHKAPI_BASE_URL
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    let service = 'e1';

    async function fetchData() {
      const response = await instance.get(Requests.fetchAll);
      setData(response.data.list[service]);
      return response;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      {data.length > 0 &&
        data.map(( program ) => (
          <Program key={program.id} program={program} />
        ))
      }
    </>
  );

};
