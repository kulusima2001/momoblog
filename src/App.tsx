import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { NotFound } from "./pages/NotFound";
import { PostDetail } from "./pages/PostDetail";
import { Scores } from "./pages/Scores";
import { ScoreSheetPage } from "./pages/ScoreSheetPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/projects/:slug" element={<PostDetail />} />
        <Route path="/news/:slug" element={<PostDetail />} />
        <Route path="/scores/:id" element={<ScoreSheetPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
