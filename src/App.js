import "./App.css";
import Employee from "./Components/Employee";

function App() {
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <div>
          <Employee name="Karan" role="Intern" />
          <Employee name="Abby" />
          <Employee name="John" />
        </div>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default App;
