import { useState } from "react";
import { useVideo } from "../../context/video-context";
import { useParams } from "react-router-dom";

export const NoteForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { setVideosState } = useVideo();
  const { id } = useParams();

  const onChangeHandler = (e) => setInputValue(e.target.value);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setVideosState((pre) => {
      return pre.map((ele) => {
        if (ele._id == id) {
          return ele.notes
            ? { ...ele, notes: [inputValue, ...ele.notes] }
            : { ...ele, notes: [inputValue] };
        } else {
          return ele;
        }
      });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-end ">
        <textarea
          placeholder="New notes"
          className="p-2 text-md border border-gray-700 focus:outline-none "
          onChange={onChangeHandler}
          value={inputValue}
        />
        <button
          type="submit"
          className="py-1 px-3 text-md rounded font-medium text-white bg-purple-800 my-2  "
        >
          Add new note
        </button>
      </form>
    </div>
  );
};
