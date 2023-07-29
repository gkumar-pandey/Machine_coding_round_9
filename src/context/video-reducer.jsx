/* eslint-disable no-unused-vars */
export const videosListInitialState = {
  watchLater: [],
  playlist: []
};

// Actions
export const ADD_TO_WATCH_LATER = "ADD_TO_WATCH_LATER";
export const REMOVE_FROM_WATCH_LATER = "REMOVE_FROM_WATCH_LATER";

export const VideoReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_WATCH_LATER:
      return { ...state, watchLater: [...state.watchLater, payload] };

    case REMOVE_FROM_WATCH_LATER:
      return {
        ...state,
        watchLater: state.watchLater.filter((ele) => ele._id !== payload._id)
      };
    default:
      return state;
  }
};
