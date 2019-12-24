import preLoader from "../../../images/Infinity-1s-270px.svg";
import React from "react";

let PreLoader =(props) =>{
    return <div style={{display:'flex',justifyContent:'center',alignItem:'center',top:'50px'}}>
        <img src={preLoader} />
    </div>
}
export default PreLoader;