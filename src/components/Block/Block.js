import './Block.css'
const arr = ['A', 'B', 'C', 'D','E','F','G','H','I'];
const Block = () => {
   const listt= arr.map((dep)=>
         <div className = "col-xl-3 col-md-4 col-sm">
             <div className="block">
                    <h3 > {dep}</h3>
                </div>
                </div>
    )
    return (
         <div className="cleck" >


        <div className="row">{listt}</div>

        {/* //     <div className="row">
        //         {/* <div className="col">
        //             <h3> A</h3>
        //         </div> */}


        {/* //         <div className="col">
        //             <h3>B</h3>
        //         </div>
        //     </div> */}




        {/* //     <div className="row">
        //         <div className="col">
        //             <h3> C</h3>
        //         </div>
                <div className="col">
                    <h3>D</h3>
                </div>
            </div> */} 


         </div>


    );
}
export default Block;