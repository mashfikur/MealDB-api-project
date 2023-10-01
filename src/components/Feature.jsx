const Feature = ({imageLink,title,children,reverse}) => {
  return (
    <div>
      <div className={`flex ${reverse?'flex-row-reverse':''} gap-10  items-center`}>
        <div className="flex-1">
          <img className="w-[70%]" src={imageLink} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-5xl font-semibold drop-shadow-lg ">
            {title}
          </h3>

          <p className="font-semibold text-gray-400 mt-4">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
