import "./index.css";
import Header from "./Components/Header";
import Employees from "./Pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./Pages/Customers";
import Dictionary from "./Pages/Dictionary";
import Definition from "./Pages/Definition";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          <Route path="/dictionary/:search" element={<Definition />}></Route>
          <Route path="/404" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
