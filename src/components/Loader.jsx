import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse opacity-50"></div>
        </div>
      </div>
      <div className="mt-8 font-mono text-blue-500 text-sm tracking-widest animate-pulse">
        INITIALIZING SYSTEM...
      </div>
    </div>
  );
};

export default Loader;