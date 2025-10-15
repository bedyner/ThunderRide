import './index.css'
import './output.css';
function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold text-blue-400 mb-4">
        Tailwind nigga
      </h1>
      <p className="text-lg text-gray-300">
        If you see this styled then peace out
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
        Test Button
      </button>
    </div>
  );
}

export default App;
