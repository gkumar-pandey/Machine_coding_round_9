import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideBarButton = ({ icon, link, name }) => {
  return (
    <Link to={link}>
      <button className="flex items-center gap-2 py-2 px-3 rounded hover:bg-slate-100 w-full my-2 text-xl ">
        <span>{icon}</span>
        <span>{name}</span>
      </button>
    </Link>
  );
};

export const SideBar = () => {
  const navlinks = [
    { icon: <HomeIcon />, link: "/", name: "Home" },
    { icon: <ExploreIcon />, link: "/explore", name: "Explore" },
    {
      icon: <PlaylistAddIcon />,
      link: "/playlist",
      name: "Playlist"
    },
    {
      icon: <WatchLaterIcon />,
      link: "/watchLater",
      name: "Watch Later"
    }
  ];
  return (
    <aside className="py-4  flex justify-center ">
      <div className="p-4 ">
        {navlinks.map((ele, idx) => (
          <SideBarButton key={idx} {...ele} />
        ))}
      </div>
    </aside>
  );
};
