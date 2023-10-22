import { useParams } from "react-router-dom";
import Button from "../UI/Button/Button";
import FacultyViewModal from "../UI/Modal/FacultyViewModal";
import Wrapper from "../Helper/Wrapper";
import { useEffect, useState } from "react";
import "./Department.css";

const Department = (props) => {
  const params = useParams();
  const [show, setShow] = useState();
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    fetchFacultyProfile();
  }, []);
  const navigateBlock = params.navigateBlock;
  const fetchFacultyProfile = async () => {
    const id = navigateBlock;
    await fetch("http://localhost:5000/faculty/get_faculty_details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed attempt");
        }
        return response.json();
      })
      .then((data) => {
       
          setFaculties(data);
     
      })
      .catch((err) => {
        // logout
        // updatefacultyData({ name: "", field: ""})
        //   window.history.pushState({},  "", "http://localhost:3000/login")
        //   window.location.reload()
      });
  };
  const showHandler = (event) => {
    setShow({
      name: "Jashvant Sir",
      cabin: "B - 202",
      email: "abc@gmail.com",
      time: "any time",
      notes: "MYSY",
    });
  };
  const list = faculties.map((faculty) => {
    return (
      <div className="card " style={{ width: "18rem" }} key={faculty._id}>
        <img src="/jrd.png" className="card-img-top faculty-photo" alt="jrd" />
        <div className="card-body">
          <h5 className="card-title faculty-name text-center">
            {faculty.fullName}
          </h5>
          <p className="card-text">{faculty.notes}</p>
          <div className="button text-center">
            <Button onClick={showHandler()}>click me</Button>
          </div>
        </div>
      </div>
    );
  });
 
  const setVal = () => {
    setShow(false);
  };
  const alertShow = () => {
    window.alert("yes");
    setShow(false);
  };
  return (
    <Wrapper>
      <h1>Department Page</h1>
      <div>{list}</div>
      {show && (
        <FacultyViewModal
          name={show.name}
          email={show.email}
          cabin={show.cabin}
          time={show.time}
          notes={show.notes}
          onConfirm={setVal}
          onAlert={alertShow}
        />
      )}
    </Wrapper>
  );
};

export default Department;
