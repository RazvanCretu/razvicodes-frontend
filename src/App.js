import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages";
import Articles from "./pages/Articles";
import { Article } from "./pages/Article";
import { About } from "./pages/About";
import { NoMatch } from "./pages/404";

function App() {
  return (
    // EVERYTHING ROUTES
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="home" replace={true} />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="blog/*"
          element={
            <Routes>
              <Route>
                <Route index element={<Articles />} />
                <Route path=":slug" element={<Article />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
