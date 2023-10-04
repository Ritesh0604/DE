// import { useParams } from "react-router-dom";
import Button from '../UI/Button/Button'
import FacultyViewModal from '../UI/Modal/FacultyViewModal'
import Wrapper from '../Helper/Wrapper'
import { useEffect, useState } from 'react';
import './Department.css';

const Department = (props) => {
    // const params=useParams();
    const [show, setShow] = useState();
    useEffect(() => {
        console.log("dummy");
    })
    const showHandler = (event) => {
        setShow({
            name: 'Jashvant Sir',
            cabin: 'B - 202',
            email: 'abc@gmail.com',
            time: 'any time',
            notes: 'MYSY'
        })
    }
    const setVal = () => {
        setShow(false);
    }
    const alertShow = () => {
        window.alert("yes");
        setShow(false);
    }
    return (
        <Wrapper>
            <h1>Department Page</h1>
            {/* <p>{params.navigateBlock}</p> */}
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
            
            <div className="card " style={{width: "18rem"}}>
                   <img src="/jrd.png" className="card-img-top faculty-photo"  alt="jrd" />
                <div className="card-body">
                     <h5 className="card-title faculty-name text-center">Prof.Jashvant Dave</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <div className='button text-center'> <Button onClick={showHandler}>click me</Button></div>
                    
                </div>
            </div> 
        
        </Wrapper>
    );
};

export default Department;
