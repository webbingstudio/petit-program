import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from './components/Navbar';
import { Program } from './components/Program';

const settings = {
  now: new Date(),
  filterTime: 15,
  themeDarkBg: 'white gray-600',
  themeDarkNav: 'white gray-700 hover:gray-900',
  themeLightBg: 'gray-100',
  themeLightNav: 'hover:gray-100'
};
const SettingsContext = React.createContext(settings);

export const App = () => {
  const path_area = '230';
  const path_service = 'e1';
  const path_date = settings.now.getFullYear()
              + '-' + String( settings.now.getMonth() + 1 ).padStart( 2, '0' )
              + '-' + String(settings.now.getDate()).padStart( 2, '0' );

  const requests = {
    fetchAll: `/list/${path_area}/${path_service}/${path_date}.json?key=${process.env.REACT_APP_NHKAPI_KEY}`
  };
  
  const instance = axios.create({
    baseURL: process.env.REACT_APP_NHKAPI_BASE_URL
  });

  const [data, setData] = useState([]);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(requests.fetchAll);
      localStorage.setItem( 'PetitProgramData', JSON.stringify( response.data.list[path_service] ) );
      setData(response.data.list[path_service]);
      return response;
    }

    let updateLast = localStorage.getItem('PetitProgramUpdateLast') ? localStorage.getItem('PetitProgramUpdateLast') : 0;
    if( ( localStorage.getItem('PetitProgramData') === null ) || ( settings.now.getDate() !== new Date( Number( updateLast ) ).getDate()) ) {
      localStorage.setItem( 'PetitProgramUpdateLast', settings.now.getTime() );
      // fetchData();
      console.log('fetchData');
    } else {
      setData(JSON.parse(localStorage.getItem('PetitProgramData')));
    }
    console.log(settings.now.getDate());
    console.log(new Date( Number( updateLast ) ).getDate());

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
