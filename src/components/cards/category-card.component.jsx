import { Link } from "react-router-dom";
import { useVideo } from "../../context/video-context";

// eslint-disable-next-line react/prop-types
export const CategoryCard = ({ thumbnail, category }) => {
  const { setCategory } = useVideo();
  return (
    <div className="m-2 p-4">
      <Link to={"/explore"} onClick={() => setCategory(category)}>
        <div>
          <div>
            <img className=" rounded w-full h-full " src={thumbnail} />
          </div>
          <div className=" text-lg font-semibold ">{category}</div>
        </div>
      </Link>
    </div>
  );
};
