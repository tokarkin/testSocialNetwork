import React, {Component} from "react";
import {colors} from '@material-ui/core';



console.log(colors);


const SettingsContainer =(props)=> {


    let Keys = Object.keys(colors);

    let [common, ...color] = Keys;
    console.log();

    let click = (c)=>{
        props.updateNewTheme(c);
        console.log(c);
    }

    let map = color.map((key) => <div >
            <div  > {
                Object.keys(colors[key]).slice(0,10).map((tint)=>
                    <div onClick={()=>click((colors[key][tint]))}  style={{background:colors[key][tint], width:'120px', height:'50px'}}>
                        {colors[key][tint]}
                    </div>)
            }</div>
    </div>


    );
        return <div style={{display:'flex', overflowX:'auto'}}  >
            {map }
        </div>

}
export default SettingsContainer;