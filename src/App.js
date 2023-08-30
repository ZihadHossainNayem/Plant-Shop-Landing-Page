import BestSelling from "./components/BestSelling";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Search />
      <BestSelling />
    </div>
  );
}

export default App;
