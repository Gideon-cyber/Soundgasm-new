import "./App.css";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import StreamNow from "./components/StreamNow";

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <StreamNow />
      <Footer />
    </div>
  );
}

export default App;
