import { useParams } from "react-router-dom";
import './Department.css'
const Department = () => {
    const params = useParams();
    const teacher = {
        name: "hiii",
        note: "this is note"
    }


    return (
        <>
            <h1>Department Page</h1>
            <p>{params.navigateBlock}</p>
            <div className="allFaculty row ">
                <div class="card abc col-3" >
                    <img class="card-img-top" src="/jrd.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <div className="q">
                            <label>Name:</label>
                            <p>{teacher.name}</p>
                        </div>
                        <div className="q">
                            <label>Note:</label>
                            <p>{teacher.note}</p>
                        </div>


                    </div>
                </div> <div class="card abc col-3" >
                    <img class="card-img-top" src="/jrd.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <div className="q">
                            <label>Name:</label>
                            <p>{teacher.name}</p>
                        </div>
                        <div className="q">
                            <label>Note:</label>
                            <p>{teacher.note}</p>
                        </div>


                    </div>
                </div> <div class="card abc col-3" >
                    <img class="card-img-top" src="/jrd.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <div className="q">
                            <label>Name:</label>
                            <p>{teacher.name}</p>
                        </div>
                        <div className="q">
                            <label>Note:</label>
                            <p>{teacher.note}</p>
                        </div>


                    </div>
                </div>
                <div class="card abc col-3" >
                    <img class="card-img-top" src="/jrd.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <div className="q">
                            <label>Name:</label>
                            <p>{teacher.name}</p>
                        </div>
                        <div className="q">
                            <label>Note:</label>
                            <p>{teacher.note}</p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};
export default Department;