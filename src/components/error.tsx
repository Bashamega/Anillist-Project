import React from 'react';

export function ErrorComponent(){
  return (
    <div className="flex items-center justify-center min-h-screen absolute top-0 left-0 w-screen">
      <div className="bg-red-200 border text-center w-1/2 flex justify-center items-center flex-col h-[200px] border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto">
        <strong className="font-bold">Something went wrong!</strong>
        <br></br>
        <span className="block sm:inline">Bad request</span>
      </div>
    </div>
  );
};


