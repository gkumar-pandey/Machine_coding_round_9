import { Heading, VideoCard } from "../components";
import { useVideo } from "../context/video-context";
import { filterDataByCategory } from "../utils/filter";

const VideosPage = () => {
  const { videosState, category } = useVideo();

  const videos = () => {
    if (category) {
      return filterDataByCategory(videosState, category);
    }

    return [...videosState];
  };

  return (
    <div>
      <Heading heading={category ? category : "Explore"} />
      <div className="flex gap-4 flex-wrap ">
        {videos().map((ele) => (
          <>
            <VideoCard key={ele._id} {...ele} />
          </>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
