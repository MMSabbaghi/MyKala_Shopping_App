const Loader = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="w-full grid place-content-center min-h-[inherit]">
      <div className="animate-spin w-24 h-24 rounded-full border-8 border-[transparent] border-y-primary"></div>
    </div>
  );
};

export default Loader;
