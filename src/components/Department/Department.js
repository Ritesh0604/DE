import { useParams } from "react-router-dom";
import Button from "../UI/Button/Button";
import FacultyViewModal from "../UI/Modal/FacultyViewModal";
import Wrapper from "../Helper/Wrapper";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "./Department.css";
import { onShow } from "../../store/facultySlice"

const Department = (props) => {
    const dispatch = useDispatch();
    const params = useParams();
    const [show, setShow] = useState();
    const [faculties, setFaculties] = useState([]);
    useEffect(() => {
        fetchFacultyProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const showHandler = (event, data) => {
        setShow({
            name: data.fullName,
            cabin: data.blockName,
            email: data.email,
            time: data.time,
            notes: data.notes,
        });
        dispatch(onShow(data));
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
                        <Button onClick={(event) => showHandler(event, faculty)}>click me</Button>
                    </div>
                </div>
            </div>
        );
    });

    const setVal = () => {
        setShow(false);
    };
    const deletefromDB = async (email, action) => {
        // event.preventDefault();
        await fetch("http://localhost:5000/faculty/delete", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(response => {
                if (!response.ok) {
                    console.log("error");
                    console.log(response);
                } else {
                    window.alert("Faculty Deleted Successfully");
                    window.location.reload();
                }
                return response.json()
            })
    };
    const deleteData = () => {
        setVal();
        deletefromDB(show.email);

    };
    // console.log(show);
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
                    onDelete={deleteData}
                />
            )}
        </Wrapper>
    );
};

export default Department;
