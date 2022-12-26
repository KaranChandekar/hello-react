import "./index.css";
import Header from "./Components/Header";
import Employees from "./Pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./Pages/Customers";

function App() {
  return (
    <Header>
      <BrowserRouter>
        <Routes>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
        </Routes>
      </BrowserRouter>
    </Header>
  );
}

export default App;
