const Skeletons = () => {
  return (
    <div className="flex w-52 flex-col gap-4 items-center">
      <div className="skeleton h-[270px] w-[280px] bg-gray-300 rounded-none"></div>
      <div className="skeleton h-2 w-28 bg-gray-300"></div>
      <div className="skeleton h-3 w-full bg-gray-300"></div>
      <div className="skeleton h-3 w-28 bg-gray-300"></div>
      <div className="skeleton h-3 w-20 bg-gray-300"></div>
    </div>
  );
};

export default Skeletons;