import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [file, setFile] = useState(null);
  const [seed, setSeed] = useState('');
  const [response, setResponse] = useState('');

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setResponse('');
  };

  const handleAnalyze = () => {
    if (file) {
      setResponse('Analyzing image of map... (this would be sent to AI)');
    } else if (seed) {
      setResponse(`Searching map data for seed: ${seed}... (AI lookup)`);
    } else {
      setResponse('Please upload an image or enter a seed.');
    }
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <Head>
        <title>RustBestBase</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">RustBestBase</h1>
      <p className="text-lg mb-6 text-gray-300">Find your perfect base location</p>
      <div className="bg-neutral-800 p-6 rounded-xl shadow-lg max-w-md w-full">
        <label className="block mb-4">
          <span className="text-sm text-gray-400">Upload your map image:</span>
          <input type="file" accept="image/*" onChange={handleUpload} className="mt-1 w-full text-white" />
        </label>
        <label className="block mb-4">
          <span className="text-sm text-gray-400">Or enter map seed:</span>
          <input type="text" value={seed} onChange={(e) => setSeed(e.target.value)} placeholder="123456" className="mt-1 w-full p-2 bg-neutral-700 rounded" />
        </label>
        <button onClick={handleAnalyze} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-semibold transition">
          Analyze
        </button>
        {response && <p className="mt-4 text-green-400">{response}</p>}
      </div>
      <footer className="mt-8 text-xs text-gray-500">Inspired by Rust. Not affiliated with Facepunch Studios.</footer>
    </div>
  );
}
