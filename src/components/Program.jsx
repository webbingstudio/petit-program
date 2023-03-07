export const Program = ({ program }) => {
  return (
    <>
      <article key={program.id}>
        <p><b>{program.title}</b></p>
        <p>{program.subtitle}</p>
        <p>{program.time}</p>
        <p>{program.day}</p>
        <p>{program.start}</p>
      </article>
      <hr />
    </>
  );
};
