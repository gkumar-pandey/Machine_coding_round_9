/* eslint-disable react/prop-types */
import { Avatar } from "../avatar/avatar.component";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useVideo } from "../../context/video-context";
import { useParams } from "react-router-dom";

const NoteTiles = ({ note }) => {
  // eslint-disable-next-line no-unused-vars
  const { videosState, setVideosState } = useVideo();
  const { id } = useParams();

  const deleteNoteHandler = () => {
    setVideosState((pre) => {
      return pre.map((video) =>
        video._id == id
          ? { ...video, notes: video.notes.filter((ele) => ele !== note) }
          : video
      );
    });
  };

  return (
    <div className="flex items-center justify-between px-3 py-1 ">
      <p className="text-lg">{note}</p>
      <div className="flex items-center gap-4 ">
        <DeleteIcon onClick={deleteNoteHandler} />
        <EditIcon />
      </div>
    </div>
  );
};

export const SingleVideoCard = ({ src, title, noteModalHandler, notes }) => {
  return (
    <div className="p-4">
      <div>
        <iframe
          width="100%"
          height="500"
          src={src}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-row items-center justify-between p-2 ">
        <div className="flex items-center gap-2 ">
          <Avatar />
          <span className=" text-lg font-medium ">{title}</span>
        </div>
        <div className="flex flex-row items-center gap-4 ">
          <WatchLaterIcon style={{ fontSize: "1.5rem" }} />
          <PlaylistAddIcon />
          <EditNoteIcon
            onClick={noteModalHandler}
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold py-2 px-3 ">My Notes</h2>
        {notes?.map((ele, idx) => (
          <NoteTiles note={ele} key={idx} />
        ))}
      </div>
    </div>
  );
};
