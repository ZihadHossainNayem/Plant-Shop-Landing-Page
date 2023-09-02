import AboutUs from "./components/AboutUs";
import BestSelling from "./components/BestSelling";
import Categories from "./components/Categories";
import CustomerComments from "./components/CustomerComments";
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
      <AboutUs />
      <Categories />
      <CustomerComments />
    </div>
  );
}

export default App;
