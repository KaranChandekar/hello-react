import "./App.css";
import Employee from "./Components/Employee";
import { useState } from "react";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("Dev");

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
        }}
      />
      {showEmployees ? (
        <div>
          <Employee name="Karan" role="Intern" />
          <Employee name="Abby" role={role} />
          <Employee name="John" />
        </div>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default App;
