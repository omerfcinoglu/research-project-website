import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/HomeContent/ProjectDetails";
import Team from "./pages/team";
import VideoRequestForm from "./pages/VideoRequest";
import { GalleryCardById } from "./pages/Gallery/GalleryCardById";
import { Publication } from "./pages/Publication";
import { Home } from "./pages/Home/Home";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ProjectDetails />} path="/project" />
      <Route element={<Team />} path="/team" />
      <Route element={<VideoRequestForm />} path="/videoRequest" />
      <Route element={<Gallery />} path="/gallery" />
      <Route path="/gallery2/:id" element={<GalleryCardById />} />
      <Route element={<Publication />} path="/publication" />
    </Routes>
  );
}

export default App;
