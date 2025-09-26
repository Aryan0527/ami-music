import React from "react";

// If you want to use a local video, import it like this:
// import heroVideo from './hero.mp4';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Optimized Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero2.mp4" // Use {heroVideo} if you import the video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="auto"
        style={{ zIndex: 0 }}
      />

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Overlay content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg transition-all duration-500">
          Welcome to Ami Music
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl drop-shadow">
          Discover, create, and share music experiences.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-full shadow transition-all duration-300"
          aria-label="Get Started with Ami Music"
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
