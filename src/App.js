import React from "react";
import {Switch , Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Note from "./component/Note";
import Home from "./component/Home";

function App() {
  return (
  <>
    <Navbar />
    <Switch >
      <Route exact path="/create" component={Note} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
  );
}

export default App;
