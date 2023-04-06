import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  const output = () => {
    // console.log("this is the index");
  };
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {output()}
      </div>
    </div>
  );
}

export default App;
