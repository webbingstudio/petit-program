import { useContext } from 'react';
import { SettingsContext } from "../App";

export const Button = ({ program }) => {
  const [,classes] = useContext(SettingsContext);
  const wrapClass = program.checked ? `${classes.primaryText} ${classes.primaryBorder}` : `${classes.inverseText} ${classes.primaryBg} ${classes.primaryBorder}`;

  return (
    <>
    <div className={`${wrapClass} absolute bottom-4 right-4 flex justify-center items-center w-10 h-10 border-2 rounded-full`}>
      { !program.checked
        ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="w-8/12 h-8/12" style={{fill:'currentColor'}} viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="w-8/12 h-8/12" style={{fill:'currentColor'}} viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"></path></svg>
      }
    </div>
    </>
  )
};