import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import SingleElement from "./pages/SingleElement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/element/:id" element={<SingleElement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
