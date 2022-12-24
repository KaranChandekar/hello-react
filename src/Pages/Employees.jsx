import "../index.css";
import Employee from "../Components/Employee";
import { useState } from "react";
import AddEmployee from "../Components/AddEmployee";
import { v4 as uuidv4 } from "uuid";

function Employees() {
  const showEmployees = true;
  const [role, setRole] = useState("Dev");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Karan",
      role: "Intern",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 2,
      name: "Abby",
      role: "Dev",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      id: 3,
      name: "John",
      role: "Director of Eng.",
      img: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg",
    },
    {
      id: 4,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      id: 5,
      name: "Melanie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg",
    },
    {
      id: 6,
      name: "Murat",
      role: "Web Designer",
      img: "https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg",
    },
    {
      id: 7,
      name: "Brandon",
      role: "The Devops Guy",
      img: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg",
    },
    {
      id: 8,
      name: "Corey",
      role: "Senior",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 9,
      name: "Jean",
      role: "Software Developer",
      img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        // return new
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default Employees;
