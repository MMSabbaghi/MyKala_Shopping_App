const ErrorContent = ({ imageSrc, message, children, imageWidth = 300 }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-[inherit] py-4">
      <img className="max-w-[90%]" src={imageSrc} alt={message} width={imageWidth} />
      <p className="text-4xl"> {message} </p>
      {children}
    </div>
  );
};

export default ErrorContent;
