export const Program = ({ program }) => {
  console.log(program);

  return (
    <>
      <article key={program.id}>
        <p><b>{program.title}</b></p>
        <p>{program.subtitle}</p>
        <p>{program.start_time} - {program.end_time}</p>
      </article>
      <hr />
    </>
  );
};
