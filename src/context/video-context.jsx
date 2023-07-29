/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import { videos } from "../StaticData/index";
import {
  ADD_TO_WATCH_LATER,
  REMOVE_FROM_WATCH_LATER,
  VideoReducer,
  videosListInitialState
} from "./video-reducer";
const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [videosState, setVideosState] = useState(videos);
  const [videoList, dispatchVideoList] = useReducer(
    VideoReducer,
    videosListInitialState
  );

  const [category, setCategory] = useState("");

  const WatchLaterHandler = (item) => {
    const isAvailabe = videoList.watchLater.find((ele) => ele._id == item._id);
    if (isAvailabe) {
      dispatchVideoList({ type: REMOVE_FROM_WATCH_LATER, payload: item });
    } else {
      dispatchVideoList({ type: ADD_TO_WATCH_LATER, payload: item });
    }
  };

  return (
    <VideoContext.Provider
      value={{
        videosState,
        setVideosState,
        videoList,
        dispatchVideoList,
        WatchLaterHandler,
        category,
        setCategory
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
