import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
function App() {
  const output = () => {
    // console.log("this is the index");
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/*  pathe : is the something that comes after the url  */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* bcz id will be a variable we put : */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
          {output()}
        </div>
      </div>
    </Router>
  );
}

export default App;
