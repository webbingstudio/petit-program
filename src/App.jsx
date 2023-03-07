import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Requests from "./Requests";
import { Navbar } from './components/Navbar';
import { Program } from './components/Program';

const settings = {
  now: new Date(),
  updateLast: 0,
  updateSpan: 86400000,
  filterTime: 15,
  themeDarkBg: 'white gray-600',
  themeDarkNav: 'white gray-700 hover:gray-900',
  themeLightBg: 'gray-100',
  themeLightNav: 'hover:gray-100'
};
const SettingsContext = React.createContext(settings);

export const App = () => {

  const instance = axios.create({
    baseURL: process.env.REACT_APP_NHKAPI_BASE_URL
  });

  const [data, setData] = useState([]);
  const [programs, setPrograms] = useState([]);

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

  useEffect(() => {
    let temp = [];
    const youbi = ['日', '月', '火', '水', '木', '金', '土'];
    data.map(( program ) => {

      const start = new Date(program.start_time);
      const end = new Date(program.end_time);
      const diff = end - start;
      program.diff = diff;
      const time = new Date(diff);
      program.time = time.getMinutes() + '分';

      if( start.getDate() === settings.now.getDate() ) {
        program.day = '今日';
      } else if( start.getDate() === settings.now.getDate() + 1 ) {
        program.day = '明日';
      } else {
        program.day = youbi[start.getDay()] + '曜日';
      }
      program.start = start.getHours() + ':' + ('0' + start.getMinutes()).slice(-2);

      if( ( ( start - settings.now ) > 0 ) && ( diff < ( ( settings.filterTime * 60 ) + 59 ) * 1000 ) ) {
        return temp.push(program);
      } else {
        return false;
      }

    });
    setPrograms(temp);
  }, [data]);

  return (
    <>
      <SettingsContext.Provider value={settings}>
        <Navbar />
        {programs.length > 0 &&
          programs.map(( program ) => (
            <Program key={program.id} program={program} />
          ))
        }
      </SettingsContext.Provider>
    </>
  );

};
