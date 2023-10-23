import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./Pages/Mainpage";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />

          <Route path="/movie/:movie_id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
