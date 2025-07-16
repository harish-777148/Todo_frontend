import React from "react";
import Home from "./Home";
import Count from "./Count";
import Object from "./Object";
import Todo from "./Todo";
import Effect from "./Effect";
import Clock from "./Clock";
import NoPage from "./NoPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  const name = "Hello";

  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home myName={name} />} />
        <Route path="/count" element={<Count />} />
        <Route path="/object" element={<Object />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
