import AboutUs from "./components/AboutUs";
import BestSelling from "./components/BestSelling";
import Categories from "./components/Categories";
import CustomerComments from "./components/CustomerComments";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
