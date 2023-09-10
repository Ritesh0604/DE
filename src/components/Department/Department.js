import { useParams } from "react-router-dom";
const Department=()=>{
    const params=useParams();
    return(
        <>
        <h1>Department Page</h1>
        <p>{params.navigateBlock}</p>
        </>
    );
};
export default Department;