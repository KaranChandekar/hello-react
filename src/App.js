import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("Dev");

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
            <Employee
              name="Karan"
              role="Intern"
              img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg&_gl=1*fbpl6t*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjI4MzY3Ni4yLjEuMTY2NjI4Mzg4MC4wLjAuMA.."
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*mhmkkg*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjE5MTExMi4xLjEuMTY2NjE5MTIyOC4wLjAuMA.."
            />
            <Employee
              name="John"
              img="https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1844547.jpg&fm=jpg&_gl=1*clpdqa*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjI4MzY3Ni4yLjEuMTY2NjI4NDAyNS4wLjAuMA.."
            />
            <Employee
              name="Karan"
              role="Intern"
              img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg&_gl=1*fbpl6t*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjI4MzY3Ni4yLjEuMTY2NjI4Mzg4MC4wLjAuMA.."
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*mhmkkg*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjE5MTExMi4xLjEuMTY2NjE5MTIyOC4wLjAuMA.."
            />
            <Employee
              name="John"
              img="https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1844547.jpg&fm=jpg&_gl=1*clpdqa*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjI4MzY3Ni4yLjEuMTY2NjI4NDAyNS4wLjAuMA.."
            />
            <Employee
              name="Karan"
              role="Intern"
              img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg&_gl=1*fbpl6t*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjI4MzY3Ni4yLjEuMTY2NjI4Mzg4MC4wLjAuMA.."
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*mhmkkg*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjE5MTExMi4xLjEuMTY2NjE5MTIyOC4wLjAuMA.."
            />
            <Employee
              name="John"
              img="https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?cs=srgb&dl=pexels-dalila-dalprat-1844547.jpg&fm=jpg&_gl=1*clpdqa*_ga*NTY1NTI3NzIuMTY2NjE5MTEwNQ..*_ga_8JE65Q40S6*MTY2NjI4MzY3Ni4yLjEuMTY2NjI4NDAyNS4wLjAuMA.."
            />
          </div>
        </>
      ) : (
        <p>You cannot see the employees!</p>
      )}
    </div>
  );
}

export default App;
