export const Button = (props) => {
  return (
    <>
    <div
      className="absolute bottom-4 right-4 flex justify-center items-center w-10 h-10 text-white bg-green-600 rounded-full"
    >
      { props.icon === 'plus'
        ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="w-8/12 h-8/12" style={{fill:'currentColor'}} viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>
        : ''
      }
    </div>
    </>
  )
};