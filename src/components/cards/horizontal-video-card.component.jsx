/* eslint-disable react/prop-types */
export const HorizontalVideoCard = (props) => {
  const { thumbnail, title, creator } = props;
  return (
    <div className="my-4 border rounded shadow-md overflow-hidden ">
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <img className=" w-full " src={thumbnail} />
        </div>
        <div className="py-2 px-1">
          <p className="line-clamp-2  ">{title}</p>
          <p className="text-md font-semibold text-gray-900 ">{creator}</p>
        </div>
      </div>
    </div>
  );
};
