import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  WelcomeBack,
  Home,
  Payments,
  Budget,
  Cards,
  More,
  Sendmoney,
  ReduxTest,
  BeCareful,
  Confirm,
} from "./components";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <div className=" mb-14">
          <Routes>
            <Route exact path="/login" element={<WelcomeBack />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/payments" element={<Payments />} />
            <Route exact path="/budget" element={<Budget />} />
            <Route exact path="/cards" element={<Cards />} />
            <Route exact path="/more" element={<More />} />
            <Route exact path="/sendmoney" element={<Sendmoney />} />
            <Route exact path="/REDT" element={<ReduxTest />} />
            <Route exact path="/becareful" element={<BeCareful />} />
            <Route exact path="/confirm" element={<Confirm />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
