import Hero from "./features/home/components/Hero";
import HomePage from "./features/home/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] items-center justify-center">
      <h1 className="text-6xl font-bold text-[#39FF14]">
        Premium Sports Nutrition
      </h1>
      <HomePage/>
    </div>
  );
}

export default App;