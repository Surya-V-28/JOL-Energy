import React from "react";
import { Link } from "react-router-dom";
import videoSource from "../images/Videos/jol(1).mp4"; // Update this with the actual path to your video file

const VideoComponent = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-black"
      id="home"
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto min-w-full min-h-full max-w-none object-cover"
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => console.error("Video loading error:", e)} // Error handling
      >
        {/* Optional: Alternative sources for compatibility */}
        <source src={videoSource} type="video/mp4" />
        <source src="../images/Videos/jol(1).webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center px-6 md:px-20">
        <div className="text-white max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold mb-4 relative whitespace-nowrap border-b-4 border-[#fdcb0a]">
            E-Waste Management
          </h1>
          <p className="text-xs xs:text-sm sm:text-lg md:text-2xl mb-6">
            Minimize environmental impact and maximize resource recovery with
            our comprehensive suite of services.
          </p>
          <Link
            to="/get-involved"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-transform transform hover:scale-105 duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
