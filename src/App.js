import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("Dev");

  const [employees, setEmployees] = useState([
    {
      name: "Karan",
      role: "Intern",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      name: "Abby",
      role: "Dev",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg",
    },
    {
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg",
    },
    {
      name: "Murat",
      role: "Web Designer",
      img: "https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg",
    },
    {
      name: "Brandon",
      role: "The Devops Guy",
      img: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg",
    },
    {
      name: "Corey",
      role: "Senior",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      name: "Jean",
      role: "Software Developer",
      img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
    },
  ]);

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default App;
