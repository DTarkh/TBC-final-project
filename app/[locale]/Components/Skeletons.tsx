const Skeletons = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="skeleton h-[300px] w-full bg-gray-300 rounded-lg"></div> 
      <div className="skeleton h-4 w-3/4 bg-gray-300"></div>
      <div className="skeleton h-4 w-1/2 bg-gray-300"></div>
      <div className="skeleton h-3 w-1/3 bg-gray-300"></div>
    </div>
  );
};

export default Skeletons;