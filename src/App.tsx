import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import CineFeedPage from "./pages/CineFeedPage";
import FlickListPage from "./pages/FlickListPage";
import MovieNightPage from "./pages/MovieNightPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        
        <Navbar />

        <div className="p-6">
          <Routes>
            <Route path="/cinefeed" element={<CineFeedPage />} />
            <Route path="/flicklist" element={<FlickListPage />} />
            <Route path="/movienight" element={<MovieNightPage />} />
            <Route
              path="/"
              element={
                <div className="text-center mt-20">
                  <h1 className="text-4xl font-bold text-gray-800">
                    🎬 Welcome to CineVerse
                  </h1>
                  <p className="text-gray-600 mt-4">
                    Explore CineFeed, FlickList, and Movie Night Picker!
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
