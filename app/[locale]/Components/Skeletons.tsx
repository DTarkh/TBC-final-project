const Skeletons = () => {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full bg-gray-300"></div>
      <div className="skeleton h-4 w-28 bg-gray-300"></div>
      <div className="skeleton h-4 w-full bg-gray-300"></div>
      <div className="skeleton h-4 w-full bg-gray-300"></div>
    </div>
  );
};

export default Skeletons;