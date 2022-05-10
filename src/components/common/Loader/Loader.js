const Loader = ({ loading, borderColor = "border-y-primary" }) => {
  if (!loading) return null;
  return (
    <div className="w-full grid place-content-center min-h-[inherit]">
      <div
        className={`animate-spin w-24 h-24 rounded-full border-8 border-[transparent] ${borderColor} `}
      ></div>
    </div>
  );
};

export default Loader;
