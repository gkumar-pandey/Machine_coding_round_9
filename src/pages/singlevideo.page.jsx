import { useParams } from "react-router-dom";
import { HorizontalVideoCard, Modal, SingleVideoCard } from "../components";
import { useVideo } from "../context/video-context";
import { useState } from "react";
import { AddNote } from "../components/add-note/add-note.compnent";

export const SingleVideoPage = () => {
  const { videosState } = useVideo();
  const { id } = useParams();
  const [openNoteModal, setOpenNoteModal] = useState(false);

  const videoDetails = videosState.find((ele) => ele._id == id);
  const noteModalHandler = () => {
    setOpenNoteModal(!openNoteModal);
  };

  return (
    <>
      <div className=" flex border p-4 ">
        <div className="w-full ">
          <SingleVideoCard
            {...videoDetails}
            noteModalHandler={noteModalHandler}
          />
        </div>
        <div className="  w-1/2 p-4 ">
          <h2 className="text-xl font-semibold ">More videos: </h2>
          <div>
            {videosState.map((ele) => (
              <HorizontalVideoCard key={ele._id} {...ele} />
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={openNoteModal} onClose={noteModalHandler}>
        <AddNote />
      </Modal>
    </>
  );
};
