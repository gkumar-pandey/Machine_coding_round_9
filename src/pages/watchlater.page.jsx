import { VideoCard } from "../components";
import { useVideo } from "../context/video-context";

export const WatchLaterPage = () => {
  const { videoList } = useVideo();

  return (
    <>
      <div>
        <div className="flex gap-4 flex-wrap ">
          {videoList?.watchLater?.map((ele) => (
            <VideoCard key={ele._id} {...ele} />
          ))}
        </div>
      </div>
    </>
  );
};
