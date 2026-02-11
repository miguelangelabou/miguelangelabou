import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base w-full fixed top-0 left-0 z-50">
      <div className="spinner"></div>
      <div className="loader mt-4">
        <p>Loading</p>
        <div className="overflow-hidden h-[40px]">
          <span className="word">images</span>
          <span className="word">scripts</span>
          <span className="word">languages</span>
          <span className="word">texts</span>
          <span className="word">images</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;