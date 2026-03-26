
const SkeletonLoader = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse bg-white rounded-md p-4 flex flex-col gap-3 border border-gray-200 shadow-sm">
          <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-100 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
          <div className="h-8 w-full bg-gray-100 rounded mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
