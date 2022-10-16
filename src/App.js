import "./App.css";
import Employee from "./Components/Employee";

function App() {
  console.log("Here we loging an Employee!");
  const showEmployees = true;

  return (
    <div className="App">
      <h1>Hello World!</h1>
      {console.log(showEmployees)};
      {showEmployees ? (
        <div>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </div>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default App;
