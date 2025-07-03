
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6 text-red-500">RustBestBase</h1>
      <input type="file" className="mb-4 text-black" />
      <input type="text" placeholder="Enter map seed" className="mb-4 p-2 text-black" />
      <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-800">Analyze</button>
    </div>
  );
}
