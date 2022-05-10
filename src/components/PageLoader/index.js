import Loader from "../common/Loader/Loader";

const PageLoader = () => {
  return (
    <div className="fixed top-0 w-screen h-screen flex flex-col gap-4 items-center justify-center bg-primary bg-opacity-75 z-50">
      <Loader loading={true} borderColor="border-y-secondary" />
      <p className="text-secondary"> در حال بارگیری... </p>
    </div>
  );
};

export default PageLoader;
