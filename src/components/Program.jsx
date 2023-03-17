import { Button } from '../components/Button';

export const Program = ({ program }) => {
  return (
    <>
      <article key={program.id} className="flex flex-col gap-4 justify-between items-start relative p-6 rounded-lg bg-white border border-2 border-gray-100 cursor-pointer transition-colors hover:border-green-600">
        <div className="flex-grow-1 flex-shrink-0 flex flex-col gap-2 justify-start items-start">
          <h2 className="text-lg font-bold">
            {program.title}
          </h2>
          <p className="text-xs text-gray-500">
          {program.subtitle}
          </p>
        </div>
        <div className="leading-none flex-grow-0 flex-shrink-0 flex w-full justify-between items-end pr-12">
            <p className="flex-grow-0 flex-shrink-0 font-bold text-green-600">
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
        <Button icon="plus" />
      </article>
    </>
  );
};
