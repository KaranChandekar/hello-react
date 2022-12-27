import "./index.css";
import Header from "./Components/Header";
import Employees from "./Pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./Pages/Customers";
import Dictionary from "./Components/Dictionary";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
