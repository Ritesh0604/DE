import "./Block.css";
import { Link } from "react-router-dom";
const arr = [
    { id: "A", name: "Student Section" },
    { id: "B", name: "Information Technology" },
    { id: "C", name: "Electrical Engineering" },
    { id: "D", name: "Computer Engineering" },
    { id: "E", name: "Gym-Khana" },
    { id: "F", name: "Electronics and Communication" },
    { id: "G", name: "Power Electronics" },
    { id: "H", name: "Chemical Engineering" },
    { id: "I", name: "Chemical Engineering" },
    { id: "J", name: "Student Section" },
    { id: "K", name: "Instrumentation and control" },
    { id: "L", name: "Electrical Engineering" },
    { id: "M", name: "Mechanical Engineering" },
    { id: "N", name: "Civil Engineering" },
    { id: "W", name: "Workshop" },
];

const Block = () => {
    const listt = arr.map((dep) => (
        <div className="col-xl-3 col-md-4 col-sm">
            <div key={dep} className="block">        
                <Link to={dep.id}>
                    <h3> {dep.id}</h3>
                    <p className="text">{dep.name}</p>
                </Link>
            </div>
        </div>
    ));
    return (
        <div className="cleck">
            <h2 className="text" >Select Department Block</h2>
            <div className="row">{listt}</div>
        </div>
    );
};
export default Block;
