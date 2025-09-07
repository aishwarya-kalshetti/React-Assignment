import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import CineFeedPage from "./pages/CineFeedPage";
import FlickListPage from "./pages/FlickListPage";
import MovieNightPage from "./pages/MovieNightPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6">
          <Routes>
            <Route path="/cinefeed" element={<CineFeedPage />} />
            <Route path="/flicklist" element={<FlickListPage />} />
            <Route path="/movienight" element={<MovieNightPage />} />

            {/* Homepage */}
            <Route
              path="/"
              element={
                <div className="text-center mt-20">
                  <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                    🎬 Welcome to CineVerse
                  </h1>
                  <p className="text-gray-600 text-lg mb-8">
                    Explore CineFeed, FlickList, and Movie Night Picker!
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    <Link
                      to="/cinefeed"
                      className="px-6 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white rounded-2xl font-semibold shadow-lg hover:scale-105 transform transition"
                    >
                      CineFeed
                    </Link>
                    <Link
                      to="/flicklist"
                      className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold shadow-lg hover:scale-105 transform transition"
                    >
                      FlickList
                    </Link>
                    <Link
                      to="/movienight"
                      className="px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl font-semibold shadow-lg hover:scale-105 transform transition"
                    >
                      Movie Night Picker
                    </Link>
                  </div>
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
