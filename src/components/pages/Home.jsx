import { useState, useEffect, useRef, useContext } from 'react';
import { SettingsContext } from "../../App";

import axios from 'axios';
import { Program } from '../Program';

export const Home = () => {
  const [settings,] = useContext(SettingsContext);
  const isMount = useRef(false);
  
  const instance = axios.create({
    baseURL: process.env.REACT_APP_NHKAPI_BASE_URL
  });

  const [data, setData] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [tasks, setTasks] = useState([]);
  // const [archives, setArchives] = useState([]);

  useEffect(() => {
    async function fetchData( requests, path_service ) {
      let items = [];
      Promise.allSettled( requests ).then(
        (response) => {
          response.map(( item, i ) => {
            if( item.status === 'fulfilled' ) {
              items = items.concat( item.value.data.list[path_service] );
            } else {
              console.log(
                String( settings.now.getDate() + i ) + "日のデータを取得できませんでした"
              );
            }
            return item;
          })
          localStorage.setItem( 'PetitProgramData', JSON.stringify(items) );
          setData(items);
        }
      )
    }

    let updateLast = localStorage.getItem('PetitProgramUpdateLast') ? localStorage.getItem('PetitProgramUpdateLast') : 0;
    if( !isMount.current ) {
      isMount.current = true;

      const savedTasks = localStorage.getItem('PetitProgramTasks') ? JSON.parse(localStorage.getItem('PetitProgramTasks')) : [];
      setTasks(savedTasks);

      if( ( localStorage.getItem('PetitProgramData') === null ) || ( settings.now.getDate() !== new Date( Number( updateLast ) ).getDate() ) ) {
        let requestDate = new Date(settings.now);
        const requests = [];
        const path_area = '230';
        const path_service = 'e1';

        for( let i = 0; i < 7; i++ ) {
          const path_y = requestDate.getFullYear();
          const path_m = String( requestDate.getMonth() + 1 ).padStart( 2, '0' );
          const path_d = String( requestDate.getDate() + i ).padStart( 2, '0' );

          requests.push(
            instance.get(
              '/list/' + path_area + '/' + path_service + '/' + path_y + '-' + path_m + '-' + path_d + '.json?key=' + process.env.REACT_APP_NHKAPI_KEY
            )
          );
  
        }
        fetchData( requests, path_service );
        requestDate = new Date(requestDate.setDate( requestDate.getDate() + 1 ));
      } else {
        setData(JSON.parse(localStorage.getItem('PetitProgramData')));
      }
      localStorage.setItem( 'PetitProgramUpdateLast', settings.now.getTime() );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let temp = [];
    const youbi = ['日', '月', '火', '水', '木', '金', '土'];
    const taskKeys = tasks.map(( task ) => { return task.id });

    data.map(( program ) => {
      program.checked = taskKeys.includes(program.id);

      const start = new Date(program.start_time);
      const end = new Date(program.end_time);
      const diff = end - start;
      program.diff = diff;
      const time = new Date(diff);
      program.time = time.getMinutes();
      program.timestamp = start.getTime();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const addTasks = ( id ) => {
    const updateTasks = [...tasks];
    programs.map(( program ) => {
      if( program.id === id ) {
        program.checked = true;
        updateTasks.push(program);
      }
      return program;
    });
    setTasks(updateTasks);
    setPrograms(programs);
    localStorage.setItem( 'PetitProgramTasks', JSON.stringify(updateTasks) );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 pb-24 lg:px-10 gap-2 lg:gap-4">
      {programs.length > 0 &&
        programs.map(( program ) => (
          <Program key={program.id} program={program} addTasks={addTasks} />
        ))
      }
    </div>
  );
};
