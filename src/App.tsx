import { Button } from "antd";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          EMart
        </h1>

        <p className="text-gray-500 mb-6">
          React + TypeScript + Ant Design + Tailwind CSS
        </p>

        <Button type="primary">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default App;