import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.page";
import { SideBar, Grid } from "./components";
import { VideosPage } from "./pages";
import { SingleVideoPage } from "./pages/singlevideo.page";
import { Toaster } from "react-hot-toast";
import { WatchLaterPage } from "./pages/watchlater.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Grid>
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<VideosPage />} />
            <Route path="/video/:id" element={<SingleVideoPage />} />
            <Route path="/watchLater" element={<WatchLaterPage />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
