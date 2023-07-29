/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useVideo } from "../../context/video-context";
import { Avatar } from "../avatar/avatar.component";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const VideoCard = (props) => {
  const { WatchLaterHandler, videoList } = useVideo();
  const { _id, title, views, thumbnail, category, creator } = props;

  const onClickHandler = () => {
    WatchLaterHandler(props);
  };

  const isAvailableInWatchLate = videoList.watchLater.find(
    (ele) => ele._id == _id
  );

  return (
    <>
      <div className=" w-full max-w-xs border rounded-md relative ">
        <div>
          <Link to={`/video/${_id}`}>
            <img
              className="w-full h-full rounded-md hover:rounded-none "
              src={thumbnail}
            />
          </Link>
          <div className="  flex gap-2 p-1 items-start ">
            <>
              <Avatar />
            </>

            <div className="text-md text-start  flex flex-col h-full justify-between ">
              <p className=" line-clamp-1 ">{title}</p>
              <p className=" font-semibold text-gray-600 ">{category}</p>
              <p className=" text-sm  font-medium ">
                {views} Views | {creator}{" "}
              </p>
            </div>
          </div>
          <button
            className={`absolute top-1 right-2 ${
              isAvailableInWatchLate ? "text-purple-400" : "text-white"
            } cursor-pointer`}
            onClick={onClickHandler}
          >
            <WatchLaterIcon style={{ fontSize: "2rem" }} />
          </button>
        </div>
      </div>
    </>
  );
};
