import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/HomeContent/ProjectDetails";
import Team from "./pages/team";
import VideoRequestForm from "./pages/VideoRequest";
import { Gallery } from "./pages/Gallery";
import { Gallery2 } from "./pages/Gallery2";
import { GalleryCardById } from "./pages/Gallery2/GalleryCardById";
import { Publication } from "./pages/Publication";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ProjectDetails />} path="/project" />
      <Route element={<Team />} path="/team" />
      <Route element={<VideoRequestForm />} path="/videoRequest" />
      <Route element={<Gallery />} path="/gallery" />
      <Route element={<Gallery2 />} path="/gallery2" />
      <Route path="/gallery2/:id" element={<GalleryCardById />} />
      <Route element={<Publication />} path="/publication" />
    </Routes>
  );
}

export default App;
