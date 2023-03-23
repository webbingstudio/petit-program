import { useContext } from 'react';
import { SettingsContext } from "../App";
import { Button } from '../components/Button';

export const Program = ({ program, addTasks }) => {
  const [,classes] = useContext(SettingsContext);
  const wrapClass = program.checked ? 'opacity-60 cursor-default' : `${classes.bg} hover:${classes.primaryBorder} cursor-pointer`;

  const handleClick = () => {
    if(!program.checked) {
      addTasks( program.id )
    }
  };

  return (
    <>
      <article onClick={handleClick} key={program.id} className={`${wrapClass} ${classes.border} flex flex-col gap-4 justify-between items-start relative p-6 rounded-lg border border-2 transition-colors`}>
        <div className="flex-grow-1 flex-shrink-0 flex flex-col gap-2 justify-start items-start">
          <h2 className="text-lg font-bold">
            {program.title}
          </h2>
          <p className="text-xs opacity-70">
          {program.subtitle}
          </p>
        </div>
        <div className="leading-none flex-grow-0 flex-shrink-0 flex w-full justify-between items-end pr-12">
            <p className={`${classes.primaryText} flex-grow-0 flex-shrink-0 font-bold`}>
              <span
                className="leading-none flex-grow-0 flex-shrink-0 text-2xl"
                style={{marginRight:'0.1em'}}
              >
              {program.time}
              </span>
              <span className="leading-none flex-grow-0 flex-shrink-0 text-xs">
                分
              </span>
            </p>
            <p className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2 font-bold">
              <span className="leading-none flex-grow-0 flex-shrink-0 text-md">
              {program.day}
              </span>
              <span className="leading-none flex-grow-0 flex-shrink-0 text-xl">
              {program.start}
              </span>
            </p>
        </div>
        <Button program={program} />
      </article>
    </>
  );
};
