import { useEffect } from "react";
import { categories } from "../StaticData/categories";
import { Heading } from "../components";
import { CategoryCard } from "../components/cards/category-card.component";
import { useVideo } from "../context/video-context";

const Home = () => {
  const { setCategory } = useVideo();

  useEffect(() => {
    setCategory("");
  }, []);

  return (
    <div className="py-4">
      <div>
        <Heading heading={"Categories"} />
        <div className="flex flex-wrap gap-2 ">
          {categories.map((ele) => (
            <CategoryCard key={ele._id} {...ele} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
